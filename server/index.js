const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const { 
    addQuote, 
    favoriteColor,
    getCompliment, 
    // addCompliment,
    getFortune, 
    deleteFortune, 
    getSpiritAnimal
} = require('./controller.js');

app.post('/api/quote', addQuote);
app.post('/api/color', favoriteColor)
app.get('/api/compliment', getCompliment);
// app.put('/api/compliment', addCompliment);
app.get('/api/fortune', getFortune);
app.delete('/api/fortune', deleteFortune);
app.get('/api/animal', getSpiritAnimal);

app.listen(4000, () => console.log("Server running on 4000"));
