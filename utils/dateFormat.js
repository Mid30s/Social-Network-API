const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

const dateFormat = (timestamp) => {
  const dateObject = new Date(timestamp);
  const formattedDate = `${addLeadingZero(
    dateObject.getDate()
  )}/${addLeadingZero(dateObject.getMonth() + 1)}/${dateObject.getFullYear()}`; // date/month/year
  const hours = addLeadingZero(dateObject.getHours());
  const minutes = addLeadingZero(dateObject.getMinutes());
  const seconds = addLeadingZero(dateObject.getSeconds());

  return `${formattedDate} ${hours}:${minutes}:${seconds}`;
};

module.exports = dateFormat;
