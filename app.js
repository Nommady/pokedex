const axios = require('axios')
nomeDasHabilidadesBusca = []
//var poke = document.getElementById('busca').value
axios.get("https://pokeapi.co/api/v2/pokemon/1")
    .then((retorno) => {
        pokemon = retorno.data
        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidadesBusca.push(habilidade.ability.name)
        })
        console.log(nomeDasHabilidadesBusca)
       var url = pokemon.species.url
       
         for (var i = 0; i < nomeDasHabilidadesBusca.length; i++) {
            axios.get('https://pokeapi.co/api/v2/ability/' + nomeDasHabilidadesBusca[i])
             .then((resposta) => {
                     var poke = resposta.data
                    var descHabilit = []
                    descHabilit.push(poke.effect_entries.effect)
                   console.log(descHabilit)
                 })
        }
        axios.get(url)
            .then((resposta) => {
                var descricaoDoPoke = resposta.data.flavor_text_entries[0].flavor_text
               // console.log(descricaoDoPoke)
            })
        
         })

