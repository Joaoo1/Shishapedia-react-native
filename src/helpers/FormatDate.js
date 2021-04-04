/*
 * Receive a date object or timestamp
 * and returns a string date on format DD/MM/YYYY
 */
const FormatDate = (date) => {
  const mDate = new Date(date);

  let year = mDate.getFullYear();
  let month = mDate.getMonth() + 1;
  let dt = mDate.getDate();

  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  year = year.toString().slice(-2);

  return `${dt}/${month}/${year}`;
};

/*
 * Receive a date object or timestamp
 * and returns a string datetime on format DD/MM/YYYY HH:mm
 */
const FormatDateWithHour = (date) => {
  const mDate = new Date(date);
  mDate.setHours(mDate.getHours() - 3);

  let year = mDate.getFullYear();
  let month = mDate.getMonth() + 1;
  let dt = mDate.getDate();

  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  year = year.toString().slice(-2);

  return `${dt}/${month}/${year} ${mDate.getHours()}:${mDate.getMinutes()}`;
};

export { FormatDate, FormatDateWithHour };
