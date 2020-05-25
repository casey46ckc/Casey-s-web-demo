function realtimeClock() {
    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //AM,PM
    var amPm = (hours < 12) ? "AM" : "PM";

    //12hrs reporting system
    hours = (hours > 12) ? hours - 12 : hours;

    //Set 2 digits
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //display clock
    document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}