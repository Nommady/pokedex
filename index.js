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

            let lista = document.createElement("ul")
            lista.id ='removerListaA'
            for (let i = 0; i < nomeDasHabilidadesA.length; i++) {
                let itemDaLista = nomeDasHabilidadesA[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                lista.append(item)
            }

            let habilidadesA = document.getElementById('cardA')
            habilidadesA.append(lista)


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

            let lista = document.createElement("ul")
            lista.id ='removerListaB'
            for (let i = 0; i < nomeDasHabilidadesB.length; i++) {
                let itemDaLista = nomeDasHabilidadesB[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                lista.append(item)
            }

            let habilidadesB = document.getElementById('cardB')
            habilidadesB.append(lista)


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


            let lista = document.createElement("ul")
            lista.id ='removerListaC'
            for (let i = 0; i < nomeDasHabilidadesC.length; i++) {
                let itemDaLista = nomeDasHabilidadesC[i]
                let item = document.createElement("li")
                item.innerText = itemDaLista
                lista.append(item)
            }            

            let habilidadesC = document.getElementById('cardC')
            habilidadesC.append(lista)


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
function buscarPokemon() {
    document.getElementById('telaPrincipal').classList.add('none')
    document.getElementById('bPrev').classList.add('none')
    document.getElementById('bNext').classList.add('none')
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

            let imgBusca = document.getElementById('imgPokeBusca')
            imgBusca.src = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonBusca.id + '.png'

            let nomeBusca = document.getElementById('nomePokeBusca')
            nomeBusca.innerHTML = nomeDoPokeBusca.toUpperCase()

            let idBusca = document.getElementById('idDoPokeBusca')
            idBusca.innerHTML = (`#${idDoPokemonBusca}`)

            let tipoBusca = document.getElementById('pokeTipoBusca')
            tipoBusca.innerHTML = (`Tipo: ${nomeDosTiposBusca}`)

            var lista = document.createElement("ul")
            for (var i = 0; i < nomeDasHabilidadesBusca.length; i++) {
                itemDaLista = nomeDasHabilidadesBusca[i]
                var item = document.createElement("li")
                item.innerText = itemDaLista
                lista.append(item)
            }

            let habilidadesBusca = document.getElementById('cardDeBusca')
            habilidadesBusca.append(lista)

            //https://pokeapi.co/api/v2/ability/{id or name}/

        })
    

}
function fecharChamada(){
    document.getElementById('telaPrincipal').classList.remove('none')
    document.getElementById('telaDeBusca').classList.add('none')
    document.getElementById('bPrev').classList.remove('none')
    document.getElementById('bNext').classList.remove('none')
    
}
function limparHabilidades(){
 document.getElementById('removerListaA').remove()
 document.getElementById('removerListaB').remove()
 document.getElementById('removerListaC').remove()
}

//`https://pokeapi.co/api/v2/ability/${nskill}`
