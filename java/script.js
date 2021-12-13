let card = document.getElementById("card");
let character = {};
let origin ={};
const aleatorio_entre = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };
const get_data = (id) => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((d) => d.json())
    .then((data) =>{
        character = data;
        get_data_origin(character.origin.url);
    })
    .catch((err) =>{
        console.log(err);
    });
};

const get_data_origin = (url) => {
    fetch(url)
    .then((d) => d.json())
    .then((data) =>{
        origin = data;
        print_data();
        console.log(origin);
    })
    .catch((err) =>{
        console.log(err);
    });
};
const print_data = () =>{
    card.innerHTML="";
    card.insertAdjacentHTML(
        "beforeend",
        `
        <div class="image-container">
            <img src="${character.image}" alt=""/>
        </div>    
         
        <div class="data-container">
            <h1>${character.name}</h1>
            <div>Especie:${character.species}</div>
            <div>Estado:${character.status}</div>
            <hr>
            <div>Origen:${origin.name} (${origin.type})</div>
            <div class="button-container">
               <button id="random-btn">Ver Personaje</button>
            </div>
        </div> 
        ` 
    );

  let rand_btn = document.getElementById("random-btn");
  rand_btn.addEventListener("click", () => {
    get_data(aleatorio_entre(1, 826));
  });
};
get_data(1);