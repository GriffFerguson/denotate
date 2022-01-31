const fs = require('fs')

line = fs.readFileSync('./words.txt', {encoding: 'utf-8'})
var words = line.split('\r\n')
words.shift()
console.log(words)

for (var i = 0; i < words.length; i++) {
    words[i] = `"${words[i]}"`
}

setTimeout(() => {
    fs.writeFile('./words.json', Buffer.from(`{"source": "http://www.mieliestronk.com/corncob_lowercase.txt", "words":[${words}]}`), (err) => {
        if (err) console.log(err)
    })
}, 5000)