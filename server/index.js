const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const { 
    addCompliment,
    addFortune,
    getCompliment, 
    getFortune, 
    deleteFortune, 
    getSpiritAnimal
} = require('./controller.js');

app.post('/api/compliment', addCompliment);
app.post('/api/fortune', addFortune)
app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);
app.delete('/api/fortune', deleteFortune);
app.get('/api/animal', getSpiritAnimal);

app.listen(4000, () => console.log("Server running on 4000"));
