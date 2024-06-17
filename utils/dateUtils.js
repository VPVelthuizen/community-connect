const { format } = require('date-fns');

const format_date = (dateString) => {
  const date = new Date(dateString);
  return format(date, "MMM d uuuu");
};

module.exports = format_date;