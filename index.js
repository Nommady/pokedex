
var url = "https://pokeapi.co/api/v2/pokemon/"
var nomeDasHabilidades = [];
var nomeDosTipos = [];
var a = 1
var b = 2
var c = 3
var imagem1 = '001'
var imagem2 = '002'
var imagem3 = '003'
function slidePokemonCrescente(){
    a = a + 3
    b = b + 3
    c = c + 3
    return
}

axios.get(url + a)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name
        console.log(nomeDoPoke)

        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })


        let nome = document.getElementById('nomeDoPoke1')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke1')
        id.innerHTML = (`#${idDoPokemon}`)
        let img1 = document.getElementById('imgDoPoke1')
        img1.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+imagem1+'.png'
        

    })

axios.get(url + b)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name
        console.log(nomeDoPoke)

        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })

        let nome = document.getElementById('nomeDoPoke2')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke2')
        id.innerHTML = (`#${idDoPokemon}`)
        let img2 = document.getElementById('imgDoPoke2')
        img2.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+imagem2+'.png'

    })
axios.get(url + 3)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name
        console.log(nomeDoPoke)

        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })

        let nome = document.getElementById('nomeDoPoke3')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke3')
        id.innerHTML = (`#${idDoPokemon}`)
        let img3 = document.getElementById('imgDoPoke3')
        img3.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+imagem3+'.png'
    })

    
