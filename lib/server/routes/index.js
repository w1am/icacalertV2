import express from 'express';
import Alert from '../models/Alert';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('welcome to cintra');
});

router.get('/api/alerts/:dname/:start/:count', async (req, res, next) => {
  const start = req.params.start;
  const count = req.params.count;
  const dname = req.params.dname;
  const alerts = await Alert.find({ district: dname });
  const len = alerts.length;
  const slicedAlerts = alerts.slice(start, count);
  return res.json({
    len,
    slicedAlerts
  })
});

module.exports = router;
