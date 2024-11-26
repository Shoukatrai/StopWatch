var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var mSecHeading = document.getElementById("mSecHeading")


var min = 0
var sec = 0
var msec = 0
var interval;


function startTimer() {

    interval = setInterval(timer, 10)


}


function timer() {
    msec++
    mSecHeading.innerHTML = msec
    if (msec == 100) {
        msec = 0;
        sec++;
        if(sec < 10){
            sec = `0${sec}`
            secHeading.innerHTML = sec
        }else{
            secHeading.innerHTML = sec
        }
        if (sec == 60) {
            sec = 0
            min++
            if(min < 10){
                min = `0${min}`
                minHeading.innerHTML = min
            }
        }
    }

}


function stopTimer(){
    clearInterval(interval)
}

function repeat(){
    clearInterval(interval)
    min= 0
    sec=0
    msec=0

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"

}