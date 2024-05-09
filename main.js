function newerDate(date1, date2) {
    if (date2 > date1) {
        return date2;
    } else {
        return date1;
    }
}

function calculateInterval(oldDate, recentDate) {
    if (oldDate > recentDate) {
        return "Error: The first date should be older than the second date.";
    }

    const timeDifferenceMilliseconds = recentDate.getTime() - oldDate.getTime();

    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const days = Math.floor(timeDifferenceMilliseconds / oneDayInMilliseconds);
    const hours = Math.floor((timeDifferenceMilliseconds % oneDayInMilliseconds) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifferenceMilliseconds % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

function formatDateNow() {
    const currentDate = new Date();

    const hour = ('0' + currentDate.getHours()).slice(-2);
    const minute = ('0' + currentDate.getMinutes()).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();

    const formattedDate = hour + ':' + minute + ' - ' + day + '/' + month + '/' + year;

    return formattedDate;
}

function calculate() {
    var date1 = new Date(document.getElementById('date1').value);
    var date2 = new Date(document.getElementById('date2').value);
    const resultElement = document.getElementById('result');
    date1 = addDay(date1);
    date2 = addDay(date2);
    const newer = newerDate(date1, date2);
    const interval = calculateInterval(date1, date2);
    const formattedCurrentDate = formatDateNow();

    resultElement.innerHTML = "Newer date: " + newer.toLocaleDateString() + "<br>Current date: " + formattedCurrentDate + "<br>Interval between dates: " + interval;
}

function newerDate(date1, date2) {
    if (date1 > date2) {
        return date1;
    } else {
        return date2;
    }
}

function addDay(date) {
    var nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
}
