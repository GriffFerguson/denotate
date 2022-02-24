var form = document.getElementsByClassName('letter')
var formWrapper = document.getElementById('answer')
var userAnswer: string;

document.body.addEventListener('submit', e => {
    e.preventDefault()
    userAnswer = ''
    for (var letter of form) {
        userAnswer += letter.getAttribute('value'); 
    }
    if (answer == userAnswer) {
        document.body.classList.add('correct')
        score(1)
        setTimeout(() => {
            document.body.classList.remove('correct')
            clearInterval(timerId)
            generateLevel()
        }, 1500)
    } else {
        document.body.classList.add('incorrect')
        setTimeout(() => {
            document.body.classList.remove('incorrect')
        }, 1000)
    }
})