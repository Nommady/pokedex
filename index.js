
var url = "https://pokeapi.co/api/v2/pokemon/7"
var nomeDasHabilidades = [];
var nomeDosTipos = [];

axios.get(url)
.then((resposta) => {
    const pokemon = resposta.data
    var nomeDoPoke = pokemon.name
    console.log(nomeDoPoke)
        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })
        console.log(nomeDasHabilidades)
        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })
        console.log(nomeDosTipos)

    var nome = document.getElementById('nomeDoPoke1')
    nome.innerHTML = nomeDoPoke.toUpperCase()


    })

