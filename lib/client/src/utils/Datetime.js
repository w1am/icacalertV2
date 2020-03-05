import moment from 'moment';
import axios from 'axios';

export const datetime = async () => {
  const worldtime = await axios.get("https://worldtimeapi.org/api/ip");
  const { data: { datetime } } = worldtime;
  const today = moment(datetime).format("MMMM YYYY");
  return today;
}
