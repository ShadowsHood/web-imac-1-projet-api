    
function changeActualFilm(compteur, nbrImage){
    let actualNumber = compteur.toString();
    if(compteur == 0){
        let previousNumber = (nbrImage-1).toString();
        let nextNumber = (compteur+1).toString();
        document.querySelector("#specialLucas").innerHTML = `
        <img src="../src/img/film`+previousNumber+`.jpg" alt="Previous Image" id="previousImage">
        <img src="../src/img/film`+actualNumber+`.jpg" alt="Actual Image" id="actualImage">
        <img src="../src/img/film`+nextNumber+`.jpg" alt="Next Image" id="nextImage">
    `
    }
    else if(compteur == nbrImage-1){
        let previousNumber = (compteur-1).toString();
        let nextNumber = "0";
        document.querySelector("#specialLucas").innerHTML = `
        <img src="../src/img/film`+previousNumber+`.jpg" alt="Previous Image" id="previousImage">
        <img src="../src/img/film`+actualNumber+`.jpg" alt="Actual Image" id="actualImage">
        <img src="../src/img/film`+nextNumber+`.jpg" alt="Next Image" id="nextImage">
    `
    }
    else{
        let previousNumber = (compteur-1).toString();
        let nextNumber = (compteur+1).toString();
        document.querySelector("#specialLucas").innerHTML = `
            <img src="../src/img/film`+previousNumber+`.jpg" alt="Previous Image" id="previousImage">
            <img src="../src/img/film`+actualNumber+`.jpg" alt="Actual Image" id="actualImage">
            <img src="../src/img/film`+nextNumber+`.jpg" alt="Next Image" id="nextImage">
        `
    }
}

let compteur = [0];

function compteurAdd1(compteur, nbrImage){
    console.log(compteur[0]);
    let i = compteur[0];
    if(compteur == nbrImage-1){
        i = 0;
    }
    else{
        i += 1;
    }
    compteur[0] = i;
    changeActualFilm(compteur[0], nbrImage);
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


