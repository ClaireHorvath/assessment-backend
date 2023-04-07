const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const spiritAnimalBtn = document.getElementById("spiritAnimalButton");
const addCompliment = document.getElementById("newComplimentButton");
const addFortune = document.getElementById("newFortuneButton");
const phrase = document.getElementById("message");
const idiom = document.getElementById("saying");


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


const newCompliment = (event) => {
    event.preventDefault()

    axios.post('http://localhost:4000/api/compliment/', {phrase: phrase.value})
        .then(res => {
            const data = res.data;
            console.log(res.data);
            alert(data);
    })
    .catch((err) => {
        console.log(err);
    })
};

addCompliment.addEventListener('submit', newCompliment);


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


const newFortune = (event) => {
    event.preventDefault()

    axios.post('http://localhost:4000/api/fortune/', {idiom: idiom.value})
        .then(res => {
            const data = res.data;
            console.log(res.data);
            alert(data);
    })
    .catch((err) => {
        console.log(err);
    })
};

addFortune.addEventListener('submit', newFortune);


const spiritAnimal = () => {
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

spiritAnimalBtn.addEventListener('click', spiritAnimal);