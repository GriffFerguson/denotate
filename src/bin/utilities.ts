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
        if (timer == 0) {
            clearInterval(timerId);
            document.body.classList.add('incorrect')
            document.getElementById('answerInput')!.innerHTML = `<span class="letter" style="width:auto;">${answer}</span>`
            score(-1)
            setTimeout(() => {
                document.body.classList.remove('incorrect')
                generateLevel()
            }, 1000)
        }
    }, 1000)
}

function score(change: number) {
    utilityElems.score.innerText = (parseInt(utilityElems.score.innerText) + change).toString()
    if (parseInt(utilityElems.score.innerText) > parseInt(utilityElems.highScore.innerText)) {
        localStorage.setItem('highScore', utilityElems.score.innerText)
        utilityElems.highScore.innerText = utilityElems.score.innerText;
    }
}

localStorage.getItem('highScore') == null ? localStorage.setItem('highScore', '0') : false
utilityElems.highScore.innerText = localStorage.getItem('highScore') as string