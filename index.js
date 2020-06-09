var a = 1
var b = 2
var c = 3

function chamadaDePokemons() {
    //Primeiro Card
    axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`)
        .then((resposta) => {
            const pokemonA = resposta.data
            let nomeDoPokeA = pokemonA.name
            let idDoPokemonA = pokemonA.id
            let nomeDasHabilidadesA = []

            pokemonA.abilities.forEach((habilidade) => {
                nomeDasHabilidadesA.push(habilidade.ability.name)
            })
            let nomeDosTiposA = [];

            pokemonA.types.forEach((Tipo) => {
                nomeDosTiposA.push(Tipo.type.name)
            })

            let tipoA = document.getElementById('typeDoPoke1')
            tipoA.innerHTML = (`Tipo: ${nomeDosTiposA}`)

            let nomeA = document.getElementById('nomeDoPoke1')
            nomeA.innerHTML = nomeDoPokeA.toUpperCase()
            let idA = document.getElementById('idDoPoke1')
            idA.innerHTML = (`#${idDoPokemonA}`)
            let imgA = document.getElementById('imgDoPoke1')
            imgA.src = 'https://pokeres.bastionbot.org/images/pokemon/' + a + '.png'


        })
        //Segundo Card
    axios.get(`https://pokeapi.co/api/v2/pokemon/${b}`)
        .then((resposta) => {
            const pokemonB = resposta.data
            let nomeDoPokeB = pokemonB.name
            let idDoPokemonB = pokemonB.id
            let nomeDasHabilidadesB = []

            pokemonB.abilities.forEach((habilidade) => {
                nomeDasHabilidadesB.push(habilidade.ability.name)
            })
            let nomeDosTiposB = [];

            pokemonB.types.forEach((Tipo) => {
                nomeDosTiposB.push(Tipo.type.name)
            })

            let tipoB = document.getElementById('typeDoPoke2')
            tipoB.innerHTML = (`Tipo: ${nomeDosTiposB}`)

            let nomeB = document.getElementById('nomeDoPoke2')
            nomeB.innerHTML = nomeDoPokeB.toUpperCase()
            let idB = document.getElementById('idDoPoke2')
            idB.innerHTML = (`#${idDoPokemonB}`)
            let imgB = document.getElementById('imgDoPoke2')
            imgB.src = 'https://pokeres.bastionbot.org/images/pokemon/' + b + '.png'


        })
        //Terceiro Card
    axios.get(`https://pokeapi.co/api/v2/pokemon/${c}`)
        .then((resposta) => {
            const pokemonC = resposta.data
            let nomeDoPokeC = pokemonC.name
            let idDoPokemonC = pokemonC.id
            let nomeDasHabilidadesC = []

            pokemonC.abilities.forEach((habilidade) => {
                nomeDasHabilidadesC.push(habilidade.ability.name)
            })
            let nomeDosTiposC = [];

            pokemonC.types.forEach((Tipo) => {
                nomeDosTiposC.push(Tipo.type.name)
            })

            let tipoC = document.getElementById('typeDoPoke3')
            tipoC.innerHTML = (`Tipo: ${nomeDosTiposC}`)

            let nomeC = document.getElementById('nomeDoPoke3')
            nomeC.innerHTML = nomeDoPokeC.toUpperCase()
            let idC = document.getElementById('idDoPoke3')
            idC.innerHTML = (`#${idDoPokemonC}`)
            let imgC = document.getElementById('imgDoPoke3')
            imgC.src = 'https://pokeres.bastionbot.org/images/pokemon/' + c + '.png'


        })

    
}
chamadaDePokemons()

function slidePokemonCrescente() {
    a = a + 3
    b = b + 3
    c = c + 3
    chamadaDePokemons()
}

function slidePokemonDecrescente() {
    a = a - 3
    b = b - 3
    c = c - 3
    chamadaDePokemons()
}

function buscarPokemon(){
    let none = document.getElementById('carouselExampleControls')
    none.classList.add('none')

    let show = document.getElementById('telaDeBusca')
    show.classList.remove('none')

    let pokeBusca = document.getElementById('busca').value

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeBusca}`)
        .then((resposta) => {
            const pokemonBusca = resposta.data
            let nomeDoPokeBusca = pokemonBusca.name
            let idDoPokemonBusca = pokemonBusca.id
            let nomeDasHabilidadesBusca = []

            pokemonBusca.abilities.forEach((habilidade) => {
                nomeDasHabilidadesBusca.push(habilidade.ability.name)
            })
            let nomeDosTiposBusca = [];

            pokemonBusca.types.forEach((Tipo) => {
                nomeDosTiposBusca.push(Tipo.type.name)
            })

            let tipoBusca = document.getElementById('pokeTipoBusca')
            tipoBusca.innerHTML = (`Tipo: ${nomeDosTiposBusca}`)

            let nomeBusca = document.getElementById('nomePokeBusca')
            nomeBusca.innerHTML = nomeDoPokeBusca.toUpperCase()

            let idBusca = document.getElementById('idDoPokeBusca')
            idBusca.innerHTML = (`#${idDoPokemonBusca}`)

            let imgBusca = document.getElementById('imgPokeBusca')            
            imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonBusca.id + '.png'


        })


   
}