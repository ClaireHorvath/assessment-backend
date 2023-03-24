const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    addQuote, 
    getCompliment, 
    getFortune, 
    deleteFortune, 
    getSpiritAnimal,
    createCrystal,
    updateCrystal
} = require('./controller.js');

app.post("/api/quote", addQuote);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.delete("/api/fortune", deleteFortune);
app.get("/api/animal", getSpiritAnimal);
app.post("/api/crystal", createCrystal);
app.put("/api/crystal", updateCrystal);

app.listen(4000, () => console.log("Server running on 4000"));
