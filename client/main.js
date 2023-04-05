const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
let spiritAnimalBtn = document.getElementById("spiritAnimalButton");
const favoriteQuote = document.getElementById("favorite-quote-form");
const favoriteColor = document.getElementById("favorite-color-form");


const getCompliment = (event) => {
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



// const complimentUpdated = () => {
//     axios.put('http://localhost:4000/api/compliment/', complimentUpdated)
//         .then(res => {
//             alert(data)
//             return "You have that glow";
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// };

// complimentBtn.addEventListener('click', getCompliment);



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



// spiritAnimal = (event) => {
//     event.preventDefault()

//     axios.get('http://localhost:4000/api/animals/')
//         .then(res => {
//             alert(res.data);
//             console.log(animals[i]);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// };

// spiritAnimal.addEventListener('submit', spiritAnimal);

const spiritAnimal = (event) => {
    axios.get('http://localhost:4000/api/animal/')
        .then(res => {
            const data = res.data;
            console.log(res.data);
            alert(data);
    })
        .catch((err) => {
            console.log(err);
        })
};

spiritAnimalBtn.addEventListener('submit', spiritAnimal);



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

favoriteQuote.addEventListener('submit', addQuote);


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

favoriteColor.addEventListener('add', favoriteColor);