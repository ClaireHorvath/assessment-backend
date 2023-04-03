const complimentBtn = document.querySelector('form');
const fortuneBtn = document.getElementById("fortuneButton");
const spiritAnimal = document.querySelector("#spirit-animal-form");
const favoriteQuote = document.querySelector("#favorite-quote-form");
const favoriteColor = document.querySelector("#favorite-color-form");

const getCompliment = () => {
    axios.get('http://localhost:4000/api/compliment/')
        .then(res => {
            const data = res.data;
            console.log(res.data);
            alert(data);
    })
        .catch((err) => {
            console.log(err);
        })
};

complimentBtn.addEventListener('click', getCompliment);

const complimentUpdated = () => {
    axios.put('http://localhost:4000/api/compliment/', complimentUpdated).then("You have that glow");
};


const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch((err) => {
            console.log(err);
        })
};

fortuneBtn.addEventListener('click', getFortune);


const getSpiritAnimal = (event) => {
    event.preventDefault()

    axios.get('http://localhost:4000/api/animal/')
        .then(res => {
            alert(res.data);
            console.log(animals[i]);
        })
        .catch((err) => {
            console.log(err);
        })
};

spiritAnimal.addEventListener('submit', getSpiritAnimal);


const addQuote = (event) => {
    event.preventDefault()
  
    axios.post('http://localhost:4000/quote/', favoriteQuote)
        .then(res => {
            addQuote(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
};
  
console.log(addQuote());
favoriteQuoteForm.addEventListener('submit', addQuote);


favoriteColor = (event) => {
    event.preventDefault()
  
    axios.post('http://localhost:4000/api/color/', favoriteColor)
        .then(res => {
            favoriteColor(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
};
  
favoriteQuoteForm.addEventListener('add', favoriteColor);