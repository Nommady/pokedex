const axios = require('axios')
const rs = require('readline-sync')

var url = "https://pokeapi.co/api/v2/pokemon/"
var pesquisa = rs.question("digite o nome ou numero do Pokemons: ").toUpperCase()
var nomeDasHabilidades = [];
var nomeDosTipos = [];
var salvos = []

axios.get(`${url}${pesquisa}`)
const pokemon = resposta.data
    .then((resposta) => {
        console.log(pokemon.name)

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
        })
        console.log(nomeDasHabilidades)

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
        })
        console.log(nomeDosTipos)

        var desejaSalvar = rs.question("Deseja salvar o pokemon? ").toLowerCase()
        if (desejaSalvar == "sim") {
            salvos.push(pesquisa)
        }
        console.log(salvos)

    })