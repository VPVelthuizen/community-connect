module.exports = {
    formatTime: (militaryTime) => {
        const [hours, minutes] = militaryTime.split(':');
        let formattedTime = '';

        if (hours < 12) {
            formattedTime = `${hours}:${minutes} AM`;
        } else if (hours === '12') {
            formattedTime = `12:${minutes} PM`;
        } else {
            formattedTime = `${hours - 12}:${minutes} PM`;
        }

        return formattedTime;
    }
};