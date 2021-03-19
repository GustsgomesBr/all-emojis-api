const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

app.use(cors())

let emojiData = fs.readFileSync('emojis.json');
let emojis = JSON.parse(emojiData);

console.log('App rodando na porta 4567');

app.get('/', (req, res) => {
    return res.json(emojis)
})

app.listen('4567')