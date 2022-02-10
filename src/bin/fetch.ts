var words;
getWords()

async function getWords() {
    words = await fetch('words.json').then(response => {return response.json()})
}

function generateLevel() {
    
}