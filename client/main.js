const complimentBtn = document.querySelector("#compliment-button");
const fortuneBtn = document.querySelector("#fortune-button");
const spiritAnimal = document.querySelector("#spirit-animal-form");
const favoriteQuote = document.querySelector("#favorite-quote-form");
const favoriteColor = document.querySelector("#favorite-color-form");

const getCompliment = (event) => {
  
    axios.get(`http://localhost:4000/api/compliment/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        complimentBtn(res.data[i])
      }
    })
    .catch(() => {
      console.log(err)
    })
};
// const getCompliment = (event) => {
//     axios.get('http://localhost:4000/api/compliment/')
//         .then(res => {
//             const data = res.data;
//             console.log(res.data);
//             alert(data);
//     })
//         .catch((err) => {
//             console.log(err);
//         })
// };
complimentBtn.addEventListener('click', getCompliment);


const complimentUpdated = (event) => {
  
    axios.put(`http://localhost:4000/api/compliment/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        complimentBtn(res.data[i])
      }
    })
    .catch(() => {
      console.log(err)
    })
};
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
complimentBtn.addEventListener('click', getCompliment);


const getFortune = (event) => {
  
    axios.get(`http://localhost:4000/api/fortune/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        fortuneBtn(res.data[i])
      }
    })
    .catch(() => {
      console.log(err)
    })
};
// const getFortune = () => {
//     axios.get('http://localhost:4000/api/fortune/')
//         .then(res => {
//             const data = res.data;
//             alert(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// };
fortuneBtn.addEventListener('click', getFortune);


const getSpiritAnimal = (event) => {
  
    axios.get(`http://localhost:4000/api/animals/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        animals(res.data[i])
      }
    })
    .catch(() => {
      console.log(err)
    })
  };
// const spiritAnimal = (event) => {
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
spiritAnimal.addEventListener('submit', getSpiritAnimal);


const addQuote = (event) => {
  
    axios.post(`http://localhost:4000/api/quote/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        newQuote(res.data)
      }
    })
    .catch(() => {
      console.log(err)
    })
  };
// const addQuote = (event) => {
//     event.preventDefault()
  
//     axios.post('http://localhost:4000/quote/', favoriteQuote)
//         .then(res => {
//             addQuote(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// };
favoriteQuote.addEventListener('submit', addQuote);



favoriteColor = (event) => {
  
    axios.get(`http://localhost:4000/api/color/`)
    .then((res) => {
      console.log(res.data)
  
      for (let i = 0; i < data.length; i++){
        favoriteColor(res.data)
      }
    })
    .catch(() => {
      console.log(err)
    })
};
// favoriteColor = (event) => {
//     event.preventDefault()
  
//     axios.post('http://localhost:4000/api/color/', favoriteColor)
//         .then(res => {
//             favoriteColor(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// };
favoriteColor.addEventListener('add', favoriteColor);