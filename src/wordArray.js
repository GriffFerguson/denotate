const fs = require('fs')

var line = fs.readFileSync('./src/words.txt', {encoding: 'utf-8'})
var badWords = [], goodWords = [], shortWords = []
var words = line.split('\r\n')
words.shift()
console.log(words)

for (var i = 0; i < words.length; i++) {
    if (words[i].length < 4) {
        shortWords.push(`"${words[i]}"`)
    }
    else if (
        words[i].substring(words[i].length - 3) == 'ing' ||
        (words[i].substring(words[i].length - 1) == 's' && (words[i].charAt(words[i].length - 2 != 's') && !['a','i','o','u'].includes(words[i].charAt(words[i].length - 2)))) ||
        words[i].substring(words[i].length - 2) == 'ed' ||
        words[i].substring(words[i].length - 2) == 'er' ||
        words[i].substring(words[i].length - 4) == 'ment'
    ) {
        badWords.push(`"${words[i]}"`)
    } else {
        goodWords.push(`"${words[i]}"`)
    }
}

setTimeout(() => {
    fs.writeFile('./src/words.json', 
        Buffer.from(`{"source": "http://www.mieliestronk.com/corncob_lowercase.txt", "words":[${goodWords}], "badWords": [${badWords}], "shortWords": [${shortWords}]}`), 
        (err) => { if (err) console.log(err) }
    )
}, 5000)