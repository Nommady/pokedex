function pokemonCompleto() {
    document.getElementById('main').classList.add('none')   
    let show = document.getElementById('telaDeBusca')
    show.classList.remove('none')    
    var pokeBusca = document.getElementById('primeiroCard').value         
    if(pokeBusca > 807 || pokeBusca ==""){
        alert('Digite um número entre 1 a 807 para continuar!')
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeBusca}`)
        .then((resposta) => {
            const pokemonBusca = resposta.data
            let nomeDoPokeBusca = pokemonBusca.name
            let idDoPokemonBusca = pokemonBusca.id
            let nomeDasHabilidadesBusca = []
            let nomeDosTiposBusca = [];
            var url = pokemonBusca.species.url
            axios.get(url)
                .then((resposta) => {
                    var descricaoDoPoke = resposta.data.flavor_text_entries[0].flavor_text
                    document.getElementById('pokeDescricao').innerHTML = descricaoDoPoke
                })
            pokemonBusca.abilities.forEach((habilidade) => {
                nomeDasHabilidadesBusca.push(habilidade.ability.name)
            })
            let lista = document.createElement("ul")
            lista.id = 'listaDeBusca'
            for (let i = 0; i < nomeDasHabilidadesBusca.length; i++) {
                itemDaLista = nomeDasHabilidadesBusca[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                axios.get('https://pokeapi.co/api/v2/ability/' + nomeDasHabilidadesBusca[i])
                    .then((resposta) => {
                        var poke = resposta.data
                        var descHabilit = poke.effect_entries[1].effect

                        lista.append(item, descHabilit)
                    })
                let habilidadesBusca = document.getElementById('pokeHabilidades')
                habilidadesBusca.append(lista)
            }
            pokemonBusca.types.forEach((Tipo) => {
                nomeDosTiposBusca.push(Tipo.type.name)
            })

            let imgBusca = document.getElementById('imgPokeBusca')
            imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonBusca.id + '.png'

            var NomeEIdBUsca = (`#${idDoPokemonBusca} - ${nomeDoPokeBusca}`)
            let nomeBusca = document.getElementById('nomeEIdBusca')
            nomeBusca.innerHTML = NomeEIdBUsca

            let tipoBusca = document.getElementById('pokeTipoBusca')
            tipoBusca.innerHTML = (`Tipo: ${nomeDosTiposBusca}`)
        })
}
function pokemonCompleto2() {
    document.getElementById('main').classList.add('none')   
    let show = document.getElementById('telaDeBusca')
    show.classList.remove('none')    
    var pokeBusca = document.getElementById('segundoCard').value         
    if(pokeBusca > 807 || pokeBusca ==""){
        alert('Digite um número entre 1 a 807 para continuar!')
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeBusca}`)
        .then((resposta) => {
            const pokemonBusca = resposta.data
            let nomeDoPokeBusca = pokemonBusca.name
            let idDoPokemonBusca = pokemonBusca.id
            let nomeDasHabilidadesBusca = []
            let nomeDosTiposBusca = [];
            var url = pokemonBusca.species.url
            axios.get(url)
                .then((resposta) => {
                    var descricaoDoPoke = resposta.data.flavor_text_entries[0].flavor_text
                    document.getElementById('pokeDescricao').innerHTML = descricaoDoPoke
                })
            pokemonBusca.abilities.forEach((habilidade) => {
                nomeDasHabilidadesBusca.push(habilidade.ability.name)
            })
            let lista = document.createElement("ul")
            lista.id = 'listaDeBusca'
            for (let i = 0; i < nomeDasHabilidadesBusca.length; i++) {
                itemDaLista = nomeDasHabilidadesBusca[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                axios.get('https://pokeapi.co/api/v2/ability/' + nomeDasHabilidadesBusca[i])
                    .then((resposta) => {
                        var poke = resposta.data
                        var descHabilit = poke.effect_entries[1].effect

                        lista.append(item, descHabilit)
                    })
                let habilidadesBusca = document.getElementById('pokeHabilidades')
                habilidadesBusca.append(lista)
            }
            pokemonBusca.types.forEach((Tipo) => {
                nomeDosTiposBusca.push(Tipo.type.name)
            })

            let imgBusca = document.getElementById('imgPokeBusca')
            imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonBusca.id + '.png'

            var NomeEIdBUsca = (`#${idDoPokemonBusca} - ${nomeDoPokeBusca}`)
            let nomeBusca = document.getElementById('nomeEIdBusca')
            nomeBusca.innerHTML = NomeEIdBUsca

            let tipoBusca = document.getElementById('pokeTipoBusca')
            tipoBusca.innerHTML = (`Tipo: ${nomeDosTiposBusca}`)
        })
}
function pokemonCompleto3() {
    document.getElementById('main').classList.add('none')   
    let show = document.getElementById('telaDeBusca')
    show.classList.remove('none')    
    var pokeBusca = document.getElementById('terceiroCard').value         
    if(pokeBusca > 807 || pokeBusca ==""){
        alert('Digite um número entre 1 a 807 para continuar!')
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeBusca}`)
        .then((resposta) => {
            const pokemonBusca = resposta.data
            let nomeDoPokeBusca = pokemonBusca.name
            let idDoPokemonBusca = pokemonBusca.id
            let nomeDasHabilidadesBusca = []
            let nomeDosTiposBusca = [];
            var url = pokemonBusca.species.url
            axios.get(url)
                .then((resposta) => {
                    var descricaoDoPoke = resposta.data.flavor_text_entries[0].flavor_text
                    document.getElementById('pokeDescricao').innerHTML = descricaoDoPoke
                })
            pokemonBusca.abilities.forEach((habilidade) => {
                nomeDasHabilidadesBusca.push(habilidade.ability.name)
            })
            let lista = document.createElement("ul")
            lista.id = 'listaDeBusca'
            for (let i = 0; i < nomeDasHabilidadesBusca.length; i++) {
                itemDaLista = nomeDasHabilidadesBusca[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                axios.get('https://pokeapi.co/api/v2/ability/' + nomeDasHabilidadesBusca[i])
                    .then((resposta) => {
                        var poke = resposta.data
                        var descHabilit = poke.effect_entries[1].effect

                        lista.append(item, descHabilit)
                    })
                let habilidadesBusca = document.getElementById('pokeHabilidades')
                habilidadesBusca.append(lista)
            }
            pokemonBusca.types.forEach((Tipo) => {
                nomeDosTiposBusca.push(Tipo.type.name)
            })

            let imgBusca = document.getElementById('imgPokeBusca')
            imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonBusca.id + '.png'

            var NomeEIdBUsca = (`#${idDoPokemonBusca} - ${nomeDoPokeBusca}`)
            let nomeBusca = document.getElementById('nomeEIdBusca')
            nomeBusca.innerHTML = NomeEIdBUsca

            let tipoBusca = document.getElementById('pokeTipoBusca')
            tipoBusca.innerHTML = (`Tipo: ${nomeDosTiposBusca}`)
        })
}
