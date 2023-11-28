// let responsePokemonsTwenty = []
// let next = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'

// const fetchPokemons = () => {
//     try {
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
//         .then(response => response.json())
//         .then(pokemons => {
//             // console.log(pokemons)
//             responsePokemonsTwenty = pokemons.results;
//             next = pokemons.next;
//             // console.log(responsePokemonsTwenty)
//             // console.log(next)
//         });
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données:', error);
//     }
// };

// const fetchMore = ()=> {
//     if (next != null ) {
//         fetch(next)
//         .then(response => response.json())
//         .then(pokemons => {
//             // responsePokemonsTwenty = responsePokemonsTwenty.concat(pokemons.results)
//             responsePokemonsTwenty = [...responsePokemonsTwenty, ...pokemons.results]
//             next = pokemons.next;
//             console.log(responsePokemonsTwenty)
//         });
//     }
// };

// fetchPokemons()
// fetchMore()


let responsePokemonsTwenty = [];
let next = 'https://pokeapi.co/api/v2/pokemon?limit=20';

const fetchPokemons = (url) => {
    const fetchData = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                responsePokemonsTwenty = [...responsePokemonsTwenty, ...data.results];
                next = data.next;
                console.log(responsePokemonsTwenty);
            });
    };

    if (next !== null) {
        return fetchData(next);
    }
};

// Appeler la fonction pour récupérer toutes les données
fetchPokemons();


// async function logMovies() {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//     const pokemons = await response.json();
//     console.log(pokemons);
// }

// logMovies();