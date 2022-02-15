var form = document.getElementById('answer')

document.body.addEventListener('submit', e => {
    e.preventDefault()
    var data = new FormData(form as HTMLFormElement)
    console.log(data)
})