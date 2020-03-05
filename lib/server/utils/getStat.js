import Stat from '../models/Stat.js';

export const getStat = async (tendency, district, date, month, year) => {
  const stat = await Stat.find({ month, date, year, district });
  console.log(stat);
  if (stat.length < 1) {
    await Stat.create({ month, date, year, tendency, district });
  }
  await Stat.findOneAndUpdate({ month, date, year, district }, { tendency });
}
