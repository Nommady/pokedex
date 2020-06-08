
var a = 1
var b = 2
var c = 3

function slidePokemonCrescente() {
    a = a + 3
    b = b + 3
    c = c + 3
    console.log(a, b, c)
    chamadaDePokemons()
}

var nomeDasHabilidades = [];

function chamadaDePokemons(){
axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name
        console.log(nomeDoPoke)
        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })
        let nomeDosTipos = [];

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })

        let tipo = document.getElementById('typeDoPoke1')
        tipo.innerHTML = nomeDosTipos

        let nome = document.getElementById('nomeDoPoke1')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke1')
        id.innerHTML = (`#${idDoPokemon}`)
        let img1 = document.getElementById('imgDoPoke1')
        img1.src = 'https://pokeres.bastionbot.org/images/pokemon/' + a + '.png'


    })

axios.get(`https://pokeapi.co/api/v2/pokemon/${b}`)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name


        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })
        let nomeDosTipos = [];

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })

        let tipo = document.getElementById('typeDoPoke2')
        tipo.innerHTML = nomeDosTipos

        let nome = document.getElementById('nomeDoPoke2')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke2')
        id.innerHTML = (`#${idDoPokemon}`)
        let img2 = document.getElementById('imgDoPoke2')
        img2.src = 'https://pokeres.bastionbot.org/images/pokemon/' + b + '.png'

    })
axios.get(`https://pokeapi.co/api/v2/pokemon/${c}`)
    .then((resposta) => {
        const pokemon = resposta.data
        let nomeDoPoke = pokemon.name


        let idDoPokemon = pokemon.id

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })
        let nomeDosTipos = [];

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })

        let tipo = document.getElementById('typeDoPoke3')
        tipo.innerHTML = nomeDosTipos
        let nome = document.getElementById('nomeDoPoke3')
        nome.innerHTML = nomeDoPoke.toUpperCase()
        let id = document.getElementById('idDoPoke3')
        id.innerHTML = (`#${idDoPokemon}`)
        let img3 = document.getElementById('imgDoPoke3')
        img3.src = 'https://pokeres.bastionbot.org/images/pokemon/' + c + '.png'
    })


}