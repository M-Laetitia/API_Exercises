// let info = document.querySelector(".info")
// let abilities = document.querySelector(".abilities")

// fetch("https://pokeapi.co/api/v2/pokemon/24")
// .then ((response) => response.json())
// .then ((data) => {
//     // console.log(data)
//     info.innerHTML = "Name:" + data.name + "<br>"
//     + "Height : " + data.height + "<br>"
//     + "Base experience : " + data.base_experience + "<br>"

//     abilities.innerHTML += "Competences : <br>"

//     data.abilities.forEach((ability) => {
//         // console.log(ability)
//         abilities.innerHTML +=  ability.ability.name + "<br>"
//     })
    
// })
// .catch((error) => console.log(error))

const nbPokemons = 150
const results = document.querySelector('.results')

function capitaliseFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + nbPokemons)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.results.forEach((result) => {
      let match = result.url.match(/\/(\d+)\/$/)[1];

      // Utiliser padStart pour formater le numéro à trois chiffres
      let formattedNumber = match.padStart(3, '0');


      console.log(result.name);
      console.log(match);

      // Créer un conteneur pour chaque Pokémon
      let pokemonContainer = document.createElement("div");
      pokemonContainer.classList.add("pokemon-container");

      
      // Ajouter le numéro du Pokémon
      let pokemonNumber = document.createElement("div");
      pokemonNumber.innerHTML = "#" + formattedNumber + "<br>";
      pokemonNumber.classList.add("pokemon-nb");
      pokemonContainer.appendChild(pokemonNumber);

      
       // Ajouter le nom du Pokémon
       let pokemonName = document.createElement("div");
       pokemonName.innerHTML = capitaliseFirstLetter(result.name) + "<br>";
       pokemonName.classList.add("pokemon-name");
       pokemonContainer.appendChild(pokemonName);
      
       
      
       
        let pokemonType = document.createElement("div");
        pokemonType.classList.add("pokemon-type");
        pokemonContainer.appendChild(pokemonType);

      // Ajouter les types du Pokémon
      fetch("https://pokeapi.co/api/v2/pokemon/" + match + "/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
          // Récupérer les types du Pokémon
        //   let types = data.types.map((type) => capitaliseFirstLetter(type.type.name));
          let types = data.types[0].type.name
          console.log(types);

          // Ajouter les types au conteneur du Pokémon
        //   pokemonContainer.innerHTML += "Types: " + types.join(", ") + "<br>";
            pokemonType.innerHTML =  types + "<br>";

          if (types == "fire") {
            // Ajouter une classe ou définir un style
            pokemonContainer.style.backgroundColor = "#ffaf9d";
          } else if (types == "grass") {
            pokemonContainer.style.backgroundColor = "#b8d3b8";
          } else if (types =="normal") {
            pokemonContainer.style.backgroundColor = "#e0e0e0";
          } else if (types == "bug") {
            pokemonContainer.style.backgroundColor = "#edcfc7";
          } else if (types =="water") {
            pokemonContainer.style.backgroundColor = "#b8c8e1";
          } else if (types == "poison") {
            pokemonContainer.style.backgroundColor = "#ddb6dd";
          } else if (types =="electric") {
            pokemonContainer.style.backgroundColor = "#f6dba8";
          } else if (types =="ground") {
            pokemonContainer.style.backgroundColor = "#cfb3b2";
          } else if (types =="fairy") {
            pokemonContainer.style.backgroundColor = "#feccf1";
          } else if (types =="fighting") {
            pokemonContainer.style.backgroundColor = "#b3afb2";
          } else if (types =="psychic") {
            pokemonContainer.style.backgroundColor = "#b192c2";
          } else if (types =="rock") {
            pokemonContainer.style.backgroundColor = "#7b7b7b";
          }  else if (types =="ghost") {
            pokemonContainer.style.backgroundColor = "#758aae";
          } else if (types =="dragon") {
            pokemonContainer.style.backgroundColor = "#75abae";
          } else if (types =="ice") {
            pokemonContainer.style.backgroundColor = "#c1ebf0";
          }

        });

      // Ajouter le conteneur du Pokémon au résultat
      results.appendChild(pokemonContainer);

      // Ajouter l'image' du Pokémon
      let pokemonPictureContainer = document.createElement("div");
      pokemonPictureContainer.classList.add("pokemon-img");
      let pokemonPicture = document.createElement("img");
      pokemonPicture.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      match +
      ".png";
      pokemonPicture.classList.add("pokemon-nb");
      pokemonPictureContainer.appendChild(pokemonPicture);
      pokemonContainer.appendChild(pokemonPictureContainer);


    });
  })
  .catch((error) => console.log(error));

 


