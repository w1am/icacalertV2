const subtractTime = (h1, m1, h2, m2) => {
  let newHour = 0
  let newMin = 0
  let totalMinutes
  if (m1 < m2) {
    newHour = (h1 - 1) - (h2)
    newMin = (m1 + 60) - m2
    totalMinutes = (newHour * 60) + newMin
  } else {
    newHour = h1 - h2
    newMin = m1 - m2
    totalMinutes = (newHour * 60) + newMin
  }
  return totalMinutes;
}

const getHour = (timeStamp) => {
  let time = timeStamp.substring(timeStamp.length - timeStamp.indexOf(" "))
  let hour = time.substring(0, time.indexOf(":"))
  return hour
}

const getMin = (timeStamp) => {
  let time = timeStamp.substring(timeStamp.length - timeStamp.indexOf(" ") + 3)
  const min = time.substring(time.indexOf(":") + 1)
  return min;
}

export const getAverage = arr => {
  let timeSpan = [];
  if (arr.length >= 2) {
    for (var i = 0; i <= arr.length - 2; i++) {
      let h1 = getHour((arr[i + 1].mdhm));
      let m1 = getMin((arr[i + 1].mdhm));
      let h2 = getHour((arr[i].mdhm));
      let m2 = getMin((arr[i].mdhm));
      timeSpan.push(subtractTime(parseInt(h1), parseInt(m1), parseInt(h2), parseInt(m2)))
    }
    const sum = timeSpan.reduce((total, currentValue) => total + currentValue);
    const mean = sum / timeSpan.length
    if (mean < 0) {
      return mean * -1
    } else {
      return parseInt(mean)
    }
  }
  return -1
}
