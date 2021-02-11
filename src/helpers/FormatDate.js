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
