import Alert from '../models/Alert';
import Stat from '../models/Stat';
import publicIp from 'public-ip';
import axios from 'axios';
import moment from 'moment';
import { districtNameTrimmer, normalizeDistrictName } from '../utils/districtNameFormatter';
import { getAverage } from '../utils/getAverage';
import { getTendency } from '../utils/getTendency';
import { getStat } from '../utils/getStat';

export default {
  Query: {
    alerts: async () => {
      const alerts = await Alert.find({});
      return alerts;
    },
    getAlerts: async (_, { dname, start, count }, { my }) => {
      try {
        if (!dname) {
          return {
            ok: false,
            error: {
              path: 'alert',
              message: 'district name not provided'
            }
          }
        }
        const alerts = await Alert.find({ district: dname });
        const slicedAlerts = alerts.slice(start, count);
        const todaysAlerts = await Alert.find({ my, district: dname });
        const average = await getAverage(todaysAlerts);
        const tendency = await getTendency(average);
        return {
          alerts,
          slicedAlerts,
          tendency
        };
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'alert',
            message: 'cannot fetch alerts'
          }
        }
      }
    }
  },
  Mutation: {
    deleteAlert: async (_, { id }) => {
      try {
        const deletedAlert = await Alert.findOneAndRemove({ _id: id });
        const { my, district, d } = deletedAlert;
        const m = my.substring(0, my.indexOf(" "));
        const y = my.substring(my.length - 4);
        const todaysAlerts = await Alert.find({ my, district, d });
        const average = await getAverage(todaysAlerts);
        const tendency = await getTendency(average);
        const stat = await getStat(tendency, district, d, m, y);
        return {
          ok: true,
        }
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'alert',
            message: 'Error deleting alert'
          }
        }
      }
    },
    createAlert: async (_, { desc, email, phone, lat, long }, { mdhm, my, d, m, y }) => {
      try {
        let city = ''
        let district = ''
        let latitude = ''
        let longitude = ''
        let countryCode = ''

        let v4 = await publicIp.v4();
        let geoUrl = '';
        if (lat == 0 || long == 0) {
          geoUrl = `http://www.geoplugin.net/json.gp?ip=${v4}&format=json`;
          const res = await axios.get(geoUrl);
          countryCode = res.data.geoplugin_countryCode;
          if (countryCode !== 'MU') {
            return {
              ok: false,
              error: {
                path: 'alert',
                message: 'Sorry, app not supported in your country '
              }
            }
          }
          city = res.data.geoplugin_city;
          district = normalizeDistrictName(districtNameTrimmer(res.data.geoplugin_regionName));
          latitude = res.data.geoplugin_latitude;
          longitude = res.data.geoplugin_longitude;
        } 
        geoUrl = `http://www.geoplugin.net/extras/location.gp?lat=${lat}&lon=${long}&format=json`;
        const res = await axios.get(geoUrl);
        countryCode = res.data.geoplugin_countryCode;
        if (countryCode !== 'MU') {
          return {
            ok: false,
            error: {
              path: 'alert',
              message: 'Sorry, app not supported in your country '
            }
          }
        }
        city = res.data.geoplugin_place;
        district = normalizeDistrictName(res.data.geoplugin_region);

        const alert = await new Alert({ desc, email, phone, city, district, latitude: lat, longitude: long, mdhm, my, d }).save();

        const todaysAlerts = await Alert.find({ my, district, d });
        const average = await getAverage(todaysAlerts);
        const tendency = await getTendency(average);
        const stat = await getStat(tendency, district, d, m, y);

        return {ok: true, alert};
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'alert',
            message: 'something went wrong'
          }
        }
      }
    }
  }
}
