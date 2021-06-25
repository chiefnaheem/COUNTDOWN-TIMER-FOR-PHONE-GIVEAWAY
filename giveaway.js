var deadline = document.querySelector(".deadline");
var items = document.querySelectorAll(".conCountdown h4");

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var giveDate = new Date(2021, 5, 30, 11, 59, 59);
var deadYear = giveDate.getFullYear();
var deadMonth = giveDate.getMonth();
deadMon = months[deadMonth];
var deadDay = giveDate.getDate();
var deadHour = giveDate.getHours();
var deadMin = giveDate.getMinutes();
var deadSec = giveDate.getSeconds();
var weekday = weekdays[giveDate.getDay()];
deadline.innerHTML = `Application for our big giveaway of an iPhone 13 pro ends on ${weekday}, ${deadDay} ${deadMon} ${deadYear}, ${deadHour}:${deadMin}:${deadSec}pm`

function countDownTime () {
    var current = new Date();
    var giveTime = giveDate.getTime();
    var currentTime = current.getTime();
    t = giveTime - currentTime
    if (t > 0) {
        // 1s = 1000ms
        // 1m = 60s
        // 1hr = 60min
        // 24 hrs = 1 day
        var oneDay = 1000*60*60*24;
        var oneHour = 1000*60*60;
        var oneMin = 1000*60
        var oneSec = 1000;
        var days = Math.floor(t / oneDay);
        var hours = Math.floor(t % oneDay / oneHour);
        var min = Math.floor (t % oneHour / oneMin);
        var sec = Math.floor(t % oneMin / oneSec);
        function addZero (item) {
            if (item < 10) {
                return `0${item}`
            }
            return item
        }

        var value = [days, hours, min, sec]
        items.forEach(function (item, index) {
        item.innerHTML = addZero(value[index]);
        });

    }else {
        cancelInterval (countDown);
        deadline.innerHTML = "Sorry, application has ended"
    }
}
countDown = setInterval(countDownTime, 1000);
countDownTime();