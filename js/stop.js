var stopAtSeconds = 600;
var secondsRemain = stopAtSeconds;

function alertFunction() {
    secondsRemain = stopAtSeconds;
    alert("It's time to stop");
}

function setRemainTime() {
    var element = document.getElementById('remain');
    element.innerHTML = "" + parseInt(secondsRemain/60) + "分" + secondsRemain % 60 + "秒";
}

setInterval(function () {
    secondsRemain = secondsRemain - 1;
    setRemainTime();
}, 1000);

setInterval(function () {
    alertFunction();
}, stopAtSeconds * 1000);
