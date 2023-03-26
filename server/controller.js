module.exports = {

    addQuote: (req, res) => {
        const {phrase, origin} = req.body
        
        let newQuote = {phrase, origin}
        
        res.sendStatus(200);
    },
    favoriteColor: (req, res) => {
        const {phrase} = req.body
        
        let favoriteColor = {phrase}
        
        res.sendStatus(200);
    },
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    addCompliment: (req, res) => {
        const {type} = req.params;
        let index = compliments.findIndex((elem) => elem.id === +req.params.id);
        compliments[index, 2].id;
        compliments.push(addCompliment);

        res.status(200).send("You have that glow");
        return;
    },
    getFortune: (req, res) => {
        const fortunes = ["You are loved", "You will be prosperous", "Career succes awaits you", "You will live a long life", "Distrust all lovers this year", "Tomorrow is a fresh start"];
        
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
        const animals = [cat, elephant, gorilla, ant, python];

        let randomAnimal = Math.floor(Math.random() * animals.length);
        let spiritAnimal = animals[randomAnimal];
    
        res.status(200).send(spiritAnimal);
    },
}