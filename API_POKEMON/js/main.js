let info = document.querySelector(".info")
let abilities = document.querySelector(".abilities")

fetch("https://pokeapi.co/api/v2/pokemon/24")
.then ((response) => response.json())
.then ((data) => {
    // console.log(data)
    info.innerHTML = "Name:" + data.name + "<br>"
    + "Height : " + data.height + "<br>"
    + "Base experience : " + data.base_experience + "<br>"

    abilities.innerHTML += "Competences : <br>"

    data.abilities.forEach((ability) => {
        // console.log(ability)
        abilities.innerHTML +=  ability.ability.name + "<br>"
    })
    
})
.catch((error) => console.log(error))

const nbPokemons = 25
const results = document.querySelector('.results')

function capitaliseFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit="+ nbPokemons )
.then ((response) => response.json())
.then ((data) => {
    console.log(data)

    data.results.forEach((result) => {
        // console.log(result)
        
        // let match = result.url.match(/\/(\d+)\/$/);
        
        // console.log(match)
        let match = result.url.match(/\/(\d+)\/$/)[1];
        console.log(result.name)
        console.log(match)
        console.log(result.base_experience)


        results.innerHTML +=  capitaliseFirstLetter(result.name) + "<br>"

        let imgPokemon = document.createElement("img");
        imgPokemon.src =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            match +
            ".png";
        
        results.appendChild(imgPokemon);

        // fetch("https://pokeapi.co/api/v2/type/" +  match + "/")
        // .then ((response) => response.json())
        // .then ((data) => {
        //     console.log(data)
        // })

    })
})
.catch((error) => console.log(error))


