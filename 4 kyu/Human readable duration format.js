function formatDuration(seconds) {
    const viewFormat = (num, str) => num ? (num > 1 ? (num + ' ' + str + 's') : (num + ' ' + str)) : '';
    const transformToZero = (num) => num < 0 ? 0 : num;
    if (seconds === 0) return 'now';

    // const years = viewFormat(Math.floor(seconds / (3600 * 24 * 365)), 'year');
    // const days = viewFormat(Math.floor((seconds - (years * (3600 * 24 * 365)) / (3600 * 24))), 'day');
    // const hours = viewFormat(Math.floor((seconds - (years * (3600 * 24 * 365)) - (days * (3600 * 24))) / 3600), 'hour');
    // const minutes = viewFormat(Math.floor(seconds - (years * (3600 * 24 * 365)) - (days * (3600 * 24)) - (hours * 3600) / 60), 'minute');
    // const newSeconds = viewFormat((seconds - (years * (3600 * 24 * 365)) - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60)), 'second');

    const years = transformToZero(Math.floor(seconds / (3600 * 24 * 365)));
    const yearsInSec = years * 3600 * 24 * 365;
    const days = transformToZero(Math.floor((seconds - yearsInSec) / (3600 * 24)));
    const daysInSec = days * 3600 * 24;
    const hours = transformToZero(Math.floor((seconds - yearsInSec - daysInSec) / 3600));
    const hoursInSec = hours * 3600;
    const minutes = transformToZero(Math.floor((seconds - yearsInSec - daysInSec - hoursInSec) / 60));
    const minutesInSec = minutes * 60;
    const newSeconds = seconds - yearsInSec - daysInSec - hoursInSec - minutesInSec;

    let result = [viewFormat(years, 'year'), viewFormat(days, 'day'), viewFormat(hours, 'hour'), viewFormat(minutes, 'minute'), viewFormat(newSeconds, 'second')]
    debugger
    result = result.filter(t => t !== '');
    switch (result.length) {
        case 5:
            return result[0] + ', ' + result[1] + ', ' + result[2] + ', ' + result[3] + ' and ' + result[4];
        case 4:
            return result[0] + ', ' + result[1] + ', ' + result[2] + ' and ' + result[3];
        case 3:
            return result[0] + ', ' + result[1] + ' and ' + result[2];
        case 2:
            return result[0] + ' and ' + result[1];
        case 1:
            return result[0];
    }
}

console.log(formatDuration(31536720));