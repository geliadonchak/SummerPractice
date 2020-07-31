// var date = new Date(5678);
// var date = new Date("04 25 2019");
// var date2 = Date();
// console.log(date);
//
// alert(date.getDate());
// alert(date.getDay());
// alert(date.getFullYear());
// alert(date.getHours());
// alert(date.getMilliseconds());
// alert(date.getMinutes());
// alert(date.getMonth());
// alert(date.getSeconds());
// alert(date.getTime());
// alert(date.getTimezoneOffset());
//
// alert(date.setDate(10));
// alert(date.setFullYear(2014));
// alert(date.setHours(22));
// alert(date.setMilliseconds(55));
// alert(date.setMinutes(45));
// alert(date.setMonth(11));
// alert(date.setSeconds(33));
// alert(date.setTime(456788457));
//
// console.log(Date.now);
// console.log(Date.parse);
// console.log(Date.toString());

function displayTime() {
    var now = new Date();
    var div = document.getElementById("clock");
    
    div.innerHTML = now.toLocaleTimeString();

    setTimeout(displayTime, 1000);
}

function displayTime2() {
    var now = new Date();
    var div = document.getElementById("clock");
    var sDate = new Date(2021, 11, 31);
    var timer = sDate.getTime() - now.getTime();

    var days = parseInt(timer / (24 * 60 * 60 * 1000));
    var hours = parseInt(timer / (60 * 60 * 1000) % 24);
    var minutes = parseInt(timer / (60 * 1000) % 60);
    var seconds = parseInt(timer / 1000 % 60);

    div.innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;
    setTimeout(displayTime2, 1000);
}

window.onload = displayTime2;