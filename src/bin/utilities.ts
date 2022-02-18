interface htmlElems {
    [name: string]: HTMLElement
};

var utilityElems: htmlElems = {
    score: document.getElementById('score')!,
    highScore: document.getElementById('high-score')!,
    timer: document.getElementById('time-circle')!,
    timerText: document.getElementById('time-circle-inner')!
}

var timer = 30;
var timerId: any;
function startTimer(this: any) {
    timer = 30;
    timerId = setInterval(() => {
        timer-=1;
        utilityElems.timerText.innerText = `0:${timer < 10 ? `0${timer}` : timer}`;
        utilityElems.timer.style.background = `conic-gradient(rgb(0,0,0) ${(timer / 30) * 100}%, rgb(255,255,255) ${((timer / 30) * 100) + 1}%)`;
    }, 1000)
}