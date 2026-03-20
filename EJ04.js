async function obtenerPais(nombrePais) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    const data = await response.json()
    const pais = data[0]

    console.log("País:", pais.name.common)
    console.log("Capital:", pais.capital[0])
    console.log("Región:", pais.region)
    console.log("Población:", pais.population)
}

