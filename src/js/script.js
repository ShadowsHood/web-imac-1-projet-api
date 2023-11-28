let responseFilm;

// const fetchFilms = () => {
//     try {
//         fetch('http://www.omdbapi.com/?t=blade&apikey=2d2c5592')
//         .then(response => response.json())
//         .then(film => {
//             responseFilm = film;
//             console.log(responseFilm)
//         });
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données:', error);
//     }
// };

async function searchFilm(name) {
    const response = await fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592");
    const film = await response.json();
    console.log(film);

    let div = document.getElementById("info");
    div.innerHTML = film.Title;
}