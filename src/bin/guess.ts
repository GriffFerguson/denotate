var form = document.getElementsByClassName('letter')
var formWrapper = document.getElementById('answer')
var userAnswer: string;

document.body.addEventListener('submit', e => {
    e.preventDefault()
    userAnswer = ''
    for (var letter of form) {
        userAnswer += letter.getAttribute('value'); 
    }
    console.log(userAnswer)
    if (answer == userAnswer) {
        document.body.classList.add('correct')
        setTimeout(() => {
            document.body.classList.remove('correct')
            generateLevel()
        }, 1500)
    } else {
        document.body.classList.add('incorrect')
        setTimeout(() => {
            document.body.classList.remove('incorrect')
        }, 1000)
    }
})