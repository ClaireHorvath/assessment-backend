const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
        .catch((err) => {
            console.log(err);
        })
};

complimentBtn.addEventListener('click', getCompliment);


const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
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
  
    const spiritAnimal = document.querySelector("#spirit-animal-form")

    axios.get("http://localhost:4000/api/spiritAnimal/", spiritAnimal)
        .then(res => {
            getSpiritAnimal();
        })
        .catch((err) => {
            console.log(err);
        })
};

spiritAnimalForm.addEventListener('select', getSpiritAnimal);


const addQuote = (event) => {
    event.preventDefault()
  
    const favoriteQuote = document.querySelector("#favorite-quote-form")
  
    axios.post('http://localhost:4000/api/favoriteQuote', favoriteQuote)
        .then(res => {
            addQuote()
        })
        .catch((err) => {
            console.log(err)
        })
};
  
favoriteQuoteForm.addEventListener('submit', addQuote);