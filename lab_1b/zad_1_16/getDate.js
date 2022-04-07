function getDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let miliseconds = date.getMilliseconds();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (miliseconds < 10) {
        miliseconds = "00" + miliseconds;
    } else if (miliseconds < 100) {
        miliseconds = "0" + miliseconds;
    }

    return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds + "." + miliseconds;
}

module.exports = getDate;