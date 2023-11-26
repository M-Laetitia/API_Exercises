const result = document.querySelector('.result')

fetch("https://geo.api.gouv.fr/communes?codePostal=67200&fields=region,nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    result.innerHTML = data[0].nom + " (" + data[0].region.nom +") <br>"
    result.innerHTML += data[0].population + " habitants <br>"

    result.innerHTML += "Les codes postaux associés sont : <br>"
    data[0].codesPostaux.forEach((codePostal) => {
        result.innerHTML += codePostal + "<br>"
    })

})


const form = document.querySelector('form')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputCP = document.querySelector('.codePostal')
    getInfosApi(inputCP)

})

function getInfosApi(inputCP) {
    const results = document.querySelector(".results")

    fetch("https://geo.api.gouv.fr/communes?codePostal="+ inputCP.value + "&fields=nom,code,codesPostaux,population")
    
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        results.innerHTML = "Nom : " + data[0].nom + "<br>"
        + "Code postal : " + data[0].code + "<br>"
        + "Population : " + data[0].population + " habitants<br><ul>"

        // results.innerHTML += "<ul>"
        data[0].codesPostaux.forEach((codePostal) => {
            results.innerHTML += "<li>"  + codePostal + "</li><br>"
        })

        results.innerHTML += "</ul>"
    })
}