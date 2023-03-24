module.exports = {

    addQuote: (req, res) => {
        const {phrase, origin} = req.body
        
        let newQuote = {phrase, origin}
        
        res.sendStatus(200);
    },
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
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
    createCrystalRating: (req, res) => {
        const crystal = Citrine;
        let { color, price, size } = req.body
        let crystalProperties = {
            color,
            price,
            size
        }
        crystal.push(crystalProperties)
        res.status(200).send(crystal)
    },
    updateCrystal: (req, res) => {
        const {type} = req.body;
        let index = crystal.findIndex((elem) => elem.id === +req.params.id)
        if(type === 'minus' && crystal[index].rating > 1){
            crystal[index].rating -= 1;
            res.status(200).send(crystal)
        } else if (type === 'plus' && crystal[index].rating < 5){
            crystal[index].rating += 1;
            res.status(200).send(crystal)
        } else {
            res.status(400).send('Not a good rating!')
        }
    }
}