export const getTendency = (avg) => {
  let tendency = ''; 

  if (avg >= 0 && avg <= 60) {
    tendency = 'high'
  } else if (avg >= 61 && avg <= 200) {
    tendency = 'mod. high'
  } else if (avg >= 201 && avg <= 400) {
    tendency = 'moderate'
  } else if (avg >= 401 && avg <= 600) {
    tendency = 'mod. low'
  } else {
    tendency = 'low'
  }

  return tendency;
}
