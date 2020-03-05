import Alert from '../models/Alert';

const listAlerts = async (start, count) => {
  const alerts = await Alert.find({});
  const slicedAlerts = alerts.slice(start, count);
}

console.log(listAlerts(1, 2))
