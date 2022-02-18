var words: any,
    answer: string,
    gameElems: htmlElems = {
        definitionBox: document.getElementById('definition-box')!,
        pronounce: document.getElementById('pronounce')!,
        partOfSpeech: document.getElementById('speech-part')!,
        definition: document.getElementById('definition')!,
        answer: document.getElementById('answerInput')!,
        submit: document.getElementById('submit')!
    };

getWords();

async function getWords() {
    words = await fetch('words.json').then(response => {return response.json()});
    generateLevel();
}

function generateLevel() {
    var rand = Math.floor(Math.random() * words.words.length);
    gameElems.answer.innerHTML = ''

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words.words[rand]}`)
    .then(response => {return response.json()})
    .then(json => {
        answer = words.words[rand];
        gameElems.pronounce.innerText = json[0].phonetic;
        gameElems.partOfSpeech.innerText = json[0].meanings[0].partOfSpeech;
        gameElems.definition.innerText = json[0].meanings[0].definitions[0].definition;
        createInput()
    })
    .catch(err => {
        console.log(err)
        generateLevel()
    })
}

var allowedLetters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]
function createInput() {
    var answerLetters = answer.split('');
    var i = 0;
    for (var letter in answerLetters) {
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', `input-${i.toString()}`);
        input.setAttribute('aria-label', `input letter ${i + 1} of your answer`)
        input.classList.add('letter');
        input.addEventListener('keydown', (event) => {
            event.preventDefault()
            var e: any = event;
            var id: number = parseInt(e.target.id.split('-')[1]);
            var key: string = e.key
            var elem = document.getElementById(`input-${id}`)
            if (['Backspace', 'Delete'].includes(key)) {
                elem!.setAttribute('value', '')
                document.getElementById(`input-${id - 1}`)!.focus()
            } else if (allowedLetters.includes(key)) {
                elem!.setAttribute('value', key)
                if (id == answerLetters.length - 1) {
                    gameElems.submit.focus()
                } else {
                    document.getElementById(`input-${id + 1}`)!.focus()
                }            
            }
        })
        gameElems.answer.appendChild(input)
        i+=1;
    }
    document.getElementById('input-0')!.focus()
}