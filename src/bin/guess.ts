var form = document.getElementsByClassName('letter')
var userAnswer: string = '';

document.body.addEventListener('submit', e => {
    e.preventDefault()
    for (var letter of form) {
        userAnswer += letter.getAttribute('value'); 
    }
    console.log(userAnswer)
})