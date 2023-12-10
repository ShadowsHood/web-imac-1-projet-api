function init () {
    slider()
}
// Changement des films de l'accueil

function slider () {
    const parent = document.querySelector("ul#slider");
    
    setInterval(function () {
        let elements = document.getElementsByClassName("slide-item");

        let idNewImg = 0;
        for (let item of elements) {
            let id = parseInt(item.getAttribute("data-id"))
            item.setAttribute("data-id", id+1)
            idNewImg = parseInt(item.getAttribute("data-img"));
        }

        let newLi = '<li class="slide-item" id="previous-slide-item" data-id="1" data-img="'+idNewImg+'"><img src="../src/img/films/film'+idNewImg+'.jpg" alt=""></li>';

        parent.removeChild(parent.lastElementChild);
        parent.insertAdjacentHTML('afterbegin', newLi)
    }, 3000);
}

// Affichage des 3 top film

async function afficherInBox(name, boxNumber){
    const responseOMDB = await fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592");
    const film = await responseOMDB.json();
    console.log(film);
    document.querySelector("#boite"+boxNumber).innerHTML = `
        <img src="`+film.Poster+`" alt="Poster du film`+film.Title+`">
        <p>`+film.Title+`</p>
        <p>`+film.Director+`</p>
        <p>`+film.Released+`</p>
    `;
};

afficherInBox("Avatar", "1");
afficherInBox("Wall E", "2");
afficherInBox("Harry Potter", "3");


