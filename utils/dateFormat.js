const moment = require("moment");

// use moment to display the date in a format we want
const dateFormat = (timestamp) => {
  return moment(timestamp).format("DD/MM/YYYY [at] hh:mm a");
};

module.exports = dateFormat;
