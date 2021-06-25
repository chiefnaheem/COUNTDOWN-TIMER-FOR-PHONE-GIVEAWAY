var date_general = document.querySelector(".date_general");
var hand_over_govt = document.querySelector(".hand");
var items = document.querySelectorAll(".countdown h4");
var itemz = document.querySelectorAll(".countdown_transition h4");
var week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var time_general = new Date(2023, 1, 23, 8, 0, 0);
var year = time_general.getFullYear();
var mon = time_general.getMonth();
var date = time_general.getDate();
var hour = time_general.getHours();
var min = time_general.getMinutes();
var sec = time_general.getSeconds();
var day = time_general.getDay();
var month = months[mon];
var week_day = week_days[day];
date_general.innerHTML = `The presidential general election to determine the next President of the Federal Republic of Nigeria comes up on ${week_day}, ${date}rd ${month}, ${year}. And the exercise starts by ${hour}:0${min}:0${sec} AM till sunset`

var time_expires = new Date(2023, 5, 12, 8, 0, 0);
var year2 = time_expires.getFullYear();
var mon2 = time_expires.getMonth();
var date2 = time_expires.getDate();
var hour2 = time_expires.getHours();
var min2 = time_expires.getMinutes();
var sec2 = time_expires.getSeconds();
var day2 = time_expires.getDay();
var month2 = months[mon2];
var week_day2 = week_days[day2];

hand_over_govt.innerHTML = `There will be transition of government on ${week_day2}, ${date2}th of ${month2}, ${year2} as President Buhari's tenure expires in office by ${hour2}:0${min2}:0${sec2}AM of same day`



function make_countdown (){
    var now = new Date();
    var get_time = time_general.getTime();
    var current_time = now.getTime();
    // console.log(current_time, get_time);
    var tip = get_time - current_time;
    if (tip > 0) {
        // 1s = 1000ms
        // 1min = 60s
        // 1hr  = 60min
        // 1day = 24hrs
        // 1 month = 30 days
        // 1 year = 12months
        var one_year = 12*30*24*60*60*1000;
        var one_month = 30*24*60*60*1000;
        var one_day = 24*60*60*1000;
        var one_hour = 60*60*1000;
        var one_minute = 60*1000;
        var one_second = 1000;
        var years = Math.floor(tip / one_year);
        var months = Math.floor((tip % one_year) / one_month);
        var days = Math.floor((tip % one_month) / one_day);
        var hours = Math.floor((tip % one_day) / one_hour);
        var minutes = Math.floor((tip % one_hour) / one_minute);
        var seconds = Math.floor((tip % one_minute) / one_second);
        function addZero (item){
            if (item < 10) {
                return `0${item}`
            }
            return item;
        }
        var value = [years, months, days, hours, minutes, seconds];
        items.forEach(function (item, index) {
            item.innerHTML = addZero(value[index])
        })
    }else {
        clearInterval(countdown);
    }
}
var countdown = setInterval(make_countdown, 1000);
make_countdown();

function make_countdown_transition (){
    var present = new Date();
    var get_time_transition = time_expires.getTime();
    var present_time = present.getTime();
    // console.log(current_time, get_time);
    var t = get_time_transition - present_time;
    if (t > 0) {
        // 1s = 1000ms
        // 1min = 60s
        // 1hr  = 60min
        // 1day = 24hrs
        // 1 month = 30 days
        // 1 year = 12months
        var one_year = 12*30*24*60*60*1000;
        var one_month = 30*24*60*60*1000;
        var one_day = 24*60*60*1000;
        var one_hour = 60*60*1000;
        var one_minute = 60*1000;
        var one_second = 1000;
        var years = Math.floor(t / one_year);
        var months = Math.floor((t % one_year) / one_month);
        var days = Math.floor((t % one_month) / one_day);
        var hours = Math.floor((t % one_day) / one_hour);
        var minutes = Math.floor((t % one_hour) / one_minute);
        var seconds = Math.floor((t % one_minute) / one_second);
        function addZero (item){
            if (item < 10) {
                return `0${item}`
            }
            return item;
        }
        var value = [years, months, days, hours, minutes, seconds];
        itemz.forEach(function (item, index) {
            item.innerHTML = addZero(value[index])
        })
    }else {
        clearInterval(countdown_transition);
    }
}
var countdown_transition = setInterval(make_countdown_transition, 1000);
make_countdown_transition();












