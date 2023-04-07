const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["You are loved", "You will be prosperous", "Career succes awaits you", "You will live a long life", "Distrust all lovers this year", "Tomorrow is a fresh start"];

module.exports = {

    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    addCompliment: (req, res) => {
        const {phrase} = req.body
        
        compliments.push(phrase)
        res.status(200).send(phrase);
    },
    addFortune: (req, res) => {
        const {idiom} = req.params;

        fortunes.push(idiom);
        res.status(200).send(idiom);
    },
    getFortune: (req, res) => {
        
        let randomString = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomString];
        
        res.status(200).send(randomFortune);
    },
    deleteFortune: (req, res) => {
        let index = fortunes.findIndex((elem) => elem.id === +req.params.id)
        fortunes.splice(index, 4)
        
        res.status(200).send(fortunes);
    },
    getSpiritAnimal: (req, res) => {
        const animals = ["cat", "elephant", "gorilla", "ant", "python"];

        let randomAnimal = Math.floor(Math.random() * animals.length);
        let spiritAnimal = animals[randomAnimal];
    
        res.status(200).send(spiritAnimal);
    }
}