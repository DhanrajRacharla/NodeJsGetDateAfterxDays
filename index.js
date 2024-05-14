var addDays = require('date-fns/addDays')
// const result = addDays (new Date(2020,7,22),8);
// console.log(result);
const result = days => {
  const newDate = addDays(new Date(2020, 7, 22), days)
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`
}

// console.log(result(8));

module.exports = result
