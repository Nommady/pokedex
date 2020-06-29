var primeiroCard = 1
var segundoCard = 2
var terceiroCard = 3

function chamadaDePokemons() {
    //Primeiro Card
    axios.get(`https://pokeapi.co/api/v2/pokemon/${primeiroCard}`)
        .then((resposta) => {
            const pokemonA = resposta.data
            let nomeDoPokeA = pokemonA.name
            let idDoPokemonA = pokemonA.id
            let nomeDasHabilidadesA = []
            document.getElementById('primeiroCard').value = idDoPokemonA           
            pokemonA.abilities.forEach((habilidade) => {
                nomeDasHabilidadesA.push(habilidade.ability.name)
            })
             
            var NomeEId = (`#${idDoPokemonA} - ${nomeDoPokeA}`) 
            let nomeA = document.getElementById('nomdEID')
            nomeA.innerHTML = NomeEId

            let nomeDosTipos = [];
            pokemonA.types.forEach((Tipo) => {
                nomeDosTipos.push(Tipo.type.name)
            }) 
            
            let tipoA = document.getElementById('typeDoPoke1')
            tipoA.innerHTML = (nomeDosTipos)


            let imgA = document.getElementById('imgDoPoke1')
            imgA.src = 'https://pokeres.bastionbot.org/images/pokemon/' + idDoPokemonA + '.png'

            let lista = document.createElement("ul")
            lista.id = 'removerListaA'
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
    axios.get(`https://pokeapi.co/api/v2/pokemon/${segundoCard}`)
        .then((resposta) => {
            const pokemonB = resposta.data
            let nomeDoPokeB = pokemonB.name
            let idDoPokemonB = pokemonB.id
            let nomeDasHabilidadesB = []
            document.getElementById('segundoCard').value = idDoPokemonB
            pokemonB.abilities.forEach((habilidade) => {
                nomeDasHabilidadesB.push(habilidade.ability.name)
            })
            let nomeDosTiposB = [];

            pokemonB.types.forEach((Tipo) => {
                nomeDosTiposB.push(Tipo.type.name)
            })

            let tipoB = document.getElementById('typeDoPoke2')
            tipoB.innerHTML = (`${nomeDosTiposB}`)

            var NomeEId2 = (`#${idDoPokemonB} - ${nomeDoPokeB}`) 
            let nomeB = document.getElementById('nomdEID2')
            nomeB.innerHTML = NomeEId2


            let imgB = document.getElementById('imgDoPoke2')
            imgB.src = 'https://pokeres.bastionbot.org/images/pokemon/' + idDoPokemonB + '.png'

            let lista = document.createElement("ul")
            lista.id = 'removerListaB'
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
    axios.get(`https://pokeapi.co/api/v2/pokemon/${terceiroCard}`)
        .then((resposta) => {
            const pokemonC = resposta.data
            let nomeDoPokeC = pokemonC.name
            let idDoPokemonC = pokemonC.id
            let nomeDasHabilidadesC = []
           
            pokemonC.abilities.forEach((habilidade) => {
                nomeDasHabilidadesC.push(habilidade.ability.name)
            })
            document.getElementById('terceiroCard').value = idDoPokemonC
            let nomeDosTiposC = [];

            pokemonC.types.forEach((Tipo) => {
                nomeDosTiposC.push(Tipo.type.name)
            })

            let tipoC = document.getElementById('typeDoPoke3')
            tipoC.innerHTML = (` ${nomeDosTiposC}`)

            var NomeEId3 = (`#${idDoPokemonC} - ${nomeDoPokeC}`) 
            let nomeC = document.getElementById('nomeEID3')
            nomeC.innerHTML = NomeEId3


            let imgC = document.getElementById('imgDoPoke3')
            imgC.src = 'https://pokeres.bastionbot.org/images/pokemon/' + idDoPokemonC + '.png'


            let lista = document.createElement("ul")
            lista.id = 'removerListaC'
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
    primeiroCard = primeiroCard + 3
    segundoCard = segundoCard + 3
    terceiroCard = terceiroCard + 3
    chamadaDePokemons()

}
function slidePokemonDecrescente() {
    primeiroCard = primeiroCard - 3
    segundoCard = segundoCard - 3
    terceiroCard = terceiroCard - 3
    chamadaDePokemons()
}

function buscarPokemon() {
    document.getElementById('main').classList.add('none')
   
    let show = document.getElementById('telaDeBusca')
    show.classList.remove('none')
    
    var pokeBusca = document.getElementById('busca').value 
    pokeBusca = pokeBusca.toLowerCase()
    
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
                .then((resposta)=>{
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
                        var descHabilit =  poke.effect_entries[1].effect               
                        
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

let busca = document.getElementById('busca')
 busca.addEventListener('keypress', function(e){
    if(e.which == 13){
        buscarPokemon()
        resetInput()
    }
 }, false);

 function fecharChamada() {
    document.getElementById('main').classList.remove('none')
    document.getElementById('telaDeBusca').classList.add('none')
    document.getElementById('bPrev').classList.remove('none')
    document.getElementById('bNext').classList.remove('none')

}
function limparHabilidades() {
    document.getElementById('removerListaA').remove()
    document.getElementById('removerListaB').remove()
    document.getElementById('removerListaC').remove()
}
function resetInput() {
    var pesquisaPokemon = document.getElementById('busca')
    pesquisaPokemon.value = ""
    document.getElementById('listaDeBusca').remove()
}

$(function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((resp)=>{
       var pokemon = resp.data.results
       var pokeNome = [];
       //var url =[]
       
       pokemon.forEach((nome)=>{
           pokeNome.push(nome.name)
           })
        
    //    pokemon.forEach((urls) => {
    //        var split = urls.url.split('/');
    //        var num = split[split.length - 2];
    //        var img ='http://assets.pokemon.com/assets/cms2/img/pokedex/full/' + num.padStart(3, "0") + ".png";
    //     url.push(img)      
    // });
    
    //     var pokemonsComplete =[]
    //     for(var i = 0; i< pokeNome.length;i++){
    //         pokemonsComplete.push(pokeNome[i], url[i])

    //     }
    //console.log(pokemonsComplete)
    $('#busca').autocomplete({
        source: pokeNome
    })
    })
})