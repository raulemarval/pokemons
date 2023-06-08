
let pokemons = [
    // Agregar más objetos Pokemon si se desea
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta',
        img: 'https://jusrecondo.github.io/hosted-assets/bulbasaur.png'
    },
    {
        nombre: 'Pikachu',
        tipo: 'Eléctrico',
        img: 'https://jusrecondo.github.io/hosted-assets/pikachu.png'
    },
    {
        nombre: 'Togepi',
        tipo: 'Hada',
        img: 'https://jusrecondo.github.io/hosted-assets/togepi.png'
    },
    {
        nombre: 'Meowth',
        tipo: 'Gato',
        img: 'https://jusrecondo.github.io/hosted-assets/meowth.png'
    },
];

function crearHTMLPokemon(pokemon) {
    let nombrePokemon = document.createElement('h2');
    nombrePokemon.innerText = pokemon.nombre;

    let imagenPokemon = document.createElement('img');
    imagenPokemon.src = pokemon.img;

    imagenPokemon.addEventListener('mouseover', function() {
        console.log(JSON.stringify(pokemon));
    });

    imagenPokemon.addEventListener('mouseout', function() {
        console.clear();
    });

    let tipoPokemon = document.createElement('p');
    tipoPokemon.innerText = pokemon.tipo;

    let listItem = document.createElement('li');
    listItem.appendChild(nombrePokemon);
    listItem.appendChild(imagenPokemon);
    listItem.appendChild(tipoPokemon);

    return listItem;
}

const listaPokemons = document.querySelector('#pokemon-list');

pokemons.forEach(function (pokemon) {
    let pokemonListItem = crearHTMLPokemon(pokemon);
    listaPokemons.appendChild(pokemonListItem);
});
