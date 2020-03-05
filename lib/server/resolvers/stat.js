import Stat from '../models/Stat';

export default {
  Query: {
    tendencies: async (_, { timeStamp, district }) => {
      try {
        const month = timeStamp.substring(0, timeStamp.indexOf(" "));
        const year = timeStamp.substring(timeStamp.length - 4);
        const stats = await Stat.find({ month, year, district });
        return {
          ok: true,
          stat: stats
        }
      } catch(err) {
        return {
          ok: false,
          error: {
            path: 'stat',
            message: 'cannot fetch stats'
          }
        }
      }
    }
  }
}
