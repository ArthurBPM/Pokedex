var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', () => {
    QuantidadeDePokemons(quantidade.value);
})

QuantidadeDePokemons(6);

function QuantidadeDePokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((val) => {

                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default });

                        if (pokemons.length == quantidade) {
                            //Finalizamos nossa requisição

                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            pokemons.map(function (val) {

                                pokemonBoxes.innerHTML += `
                                                      
                                <div class="pokemon-box">
                                <img src="`+ val.imagem + `" alt="">
                                <p>`+ val.nome + `</p>
                            
                            `
                            })

                        }

                    })

            })

            pokemons.map((val) => {
                console.log(val.nome);
            })

        })
}