const { format } = require('date-fns');

module.exports = {
    formatTime: (militaryTime) => {
        const [hours, minutes] = militaryTime.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        return format(date, "h:mm a");
    }
};