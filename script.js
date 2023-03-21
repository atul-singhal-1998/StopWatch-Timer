let seconds = 00;
let miliseconds = 00;
let minutes = 00;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendMiliSeconds = document.getElementById("miliseconds");
let buttonStart = document.getElementById("button_start")
let buttonStop = document.getElementById("button_stop")
let buttonReStart = document.getElementById("button_restart")
let Interval;

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer,10)
}
buttonStop.onclick = function () {
    clearInterval(Interval);
}
buttonReStart.onclick = function () {
    clearInterval(Interval);
    
    seconds = 00;
    miliseconds = 00;
    minutes = 00;
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMiliSeconds.innerHTML = "00";

}

 function startTimer(){
    miliseconds++;
    if(miliseconds <= 9){
        appendMiliSeconds.innerHTML = "0" + miliseconds;
    }
    if(miliseconds > 9){
        appendMiliSeconds.innerHTML = miliseconds;
    }
    if(miliseconds > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        miliseconds = 0;
        appendMiliSeconds.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        seconds = 0;
        miliseconds = 0;
        appendMinutes.innerHTML = "0" + minutes;
        appendSeconds.innerHTML = "0" + 0;
        appendMiliSeconds.innerHTML = "0" + 0;
    }
}