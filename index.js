var a = 1
var b = 2
var c = 3

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
chamadaDePokemons()
var nomeDasHabilidades = []

function chamadaDePokemons() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`)
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

var visibilidade = true

function ocultarExibir() { // função para alternar a exibição da div

    if (visibilidade) { //Se a variável visibilidade for igual a true, então...
        var busca = document.getElementById("carouselExampleControls").style.display = "none"; //Ocultamos a div
        visibilidade = false; //alteramos o valor da variável para falso.

    } else { //ou se a variável estiver com o valor false..
        document.getElementById("carouselExampleControls").style.display = "block"; //Exibimos a div..
        visibilidade = true; //Alteramos o valor da variável para true.
        var busca = document.getElementById('busca').value
        var show = document.getElementById('telaDeBusca')

        show.classList.remove('none')
        axios.get(`https://pokeapi.co/api/v2/pokemon/${busca}`)
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

                let tipo = document.getElementById('typeDoPokeBusca')
                tipo.innerHTML = nomeDosTipos
                let nome = document.getElementById('nomeDoPokeBusca')
                nome.innerHTML = nomeDoPoke.toUpperCase()
                let id = document.getElementById('idDoPokeBusca')
                id.innerHTML = (`#${idDoPokemon}`)
                let imgBusca = document.getElementById('imgDoPokeBusca')
                imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + idDoPokemon + '.png'
            })
    }

}