const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

app.use(cors())

let emojiData = fs.readFileSync('emojis.json');
let emojis = JSON.parse(emojiData);

console.log('App rodando na porta 4567');

app.get('/', (req, res) => {

        return res.json(emojis);

})

app.get('/fully-qualified', (req, res) =>{
    let emojiQualified= {};
    var qualifieds = 0;

        for (let i = 0; i < emojis.length; i++) {
            if(emojis[i].qualification === 'fully-qualified'){
                emojiQualified[i] = emojis[i];
                qualifieds++
            }
            
        }
        console.log(qualifieds + ', Emojis are Fully Qualified')
        return res.json(emojiQualified)

})

app.get('/minimally-qualified', (req, res) =>{
    let emojiminimallyQualified= {};
    var qualifieds = 0;

        for (let i = 0; i < emojis.length; i++) {
            if(emojis[i].qualification === 'fully-qualified'){
                emojiminimallyQualified[i] = emojis[i];
                qualifieds++
            }
            
        }
        console.log(qualifieds + ', Emojis are Minimally Qualified')
        return res.json(emojiminimallyQualified)

})




app.listen('4567')