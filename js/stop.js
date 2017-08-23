var stopAtSeconds = 60 * 40;
var isRunning = true;
var secondsRemain = stopAtSeconds;


function alertFunction() {
    secondsRemain = stopAtSeconds;
    alert("It's time to stop");
}

function setRemainTime() {
    var element = document.getElementById('remain');
    element.innerHTML = "" + parseInt(secondsRemain/60) + "分" + secondsRemain % 60 + "秒";
}

function decreaseRemainTime() {
	if (isRunning == true){
		secondsRemain = secondsRemain -1;
	} 
}

function stopCount(){
	isRunning = false;
}

function resume(){
	isRunning = true;
}

function restart(){
	secondsRemain = stopAtSeconds;
	resume();
}

setInterval(function () {
    decreaseRemainTime();
    setRemainTime();
}, 1000);

setInterval(function () {
    alertFunction();
}, stopAtSeconds * 1000);
