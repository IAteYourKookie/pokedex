/*
quando clicar no pokemon da listagem o cartao dele e escondido e o cartao do pokemon
selecionado e mostrado

variavel const (constante) => o valor nao pode ser alterado
variavel let => valor pode ser alterado

precisaremos trabalhar com dois elementos

vamos precisar trabalhar com o evento de clique
feito pelo usuario na listagem de pokemon

- remover a classe aberto
- ao clicar em um pokemon da listagem pegamos o id desse
pokemon para saber qual cartao mostrar

-evitar comentar codigo
*/

//precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

const listaSelacaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
//console.log(pokemonsCard)

listaSelacaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //arrow function
        //console.log(pokemon)

        //TROCAR CARTAO
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById("cartao-"+idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //TROCAR COR NA LISTAGEM
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})