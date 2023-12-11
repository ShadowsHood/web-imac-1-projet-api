var tag = document.createElement('script');
            
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


async function searchFilm(name) {
    const responseOMDB = await fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592");
    const film = await responseOMDB.json();

    // console.log(film);

    if(film.Response == "False"){
        affichageNotFound();
    }else{
        let monFilm = film.Title;

        const responseYTB = await fetch("https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=bande%20annonce%20francais%20"+monFilm+"&type=video&key=AIzaSyDUWcSrdcXJM7uewjk5BaKs8FDNJPqvphQ");
        const maVideo = await responseYTB.json();

        let videos = maVideo.items;
        for(video of videos){
            // let myNewLink = "https://www.youtube.com/embed/"+(video.id.videoId);
            // Pour eviter d'use tous les quotas ytb
            let myNewLink = "https://www.youtube.com/embed/d5MZnsaAejA?si=KbDEYcEYXw0ksmMl";

            affichageFound (film, myNewLink);
        };
    }
}

function affichageFound (film, link) {

    document.querySelector("#mainInfo").innerHTML = 
    `<h1 id="filmTitle">`+film.Title+`</h1>
    <div id="infoPrincipals">
        <p>Date : <span class="filmExport">`+film.Released+`</span></p>
        <div class="separateur"></div>
        <p>Director : <span class="filmExport">`+film.Director+`</span></p>
        <div class="separateur"></div>
        <p>Durée : <span class="filmExport">`+film.Runtime+`</span</p>
    </div>`

    document.querySelector("#lecteurYoutube").innerHTML = 
    `<iframe width=100% height=auto class="affiche" src=`+link+` title="`+film.Title+` lecteur YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    document.querySelector("main").insertAdjacentHTML('beforeend', '<section id="alt-info-container"  class="container colored-container flex"></section>');

    document.querySelector("#alt-info-container").innerHTML = 
    `<img id="afficheFilm" class="affiche" src=`+film.Poster+` alt="Affiche de `+film.Title+`"/>
    <div id="infoComplementaire" class="flexbox">
        <p id="originalTitle">Titre originale : <span class="filmExport">`+film.Title+`</span></p>
        <p id="dateSortie">Date de sortie : <span class="filmExport">`+film.Released+`</span></p>
        <p id="genreFilm">Genre : <span class="filmExport">`+film.Genre+`</span></p>
        <p id="castingFilm">Casting : <span class="filmExport">`+film.Actors+`</span></p>
        <p id="shortSummary"><span class="filmExport">`+film.Plot+`</span></p>
    </div>`
}

function affichageNotFound () {
    document.querySelector("#lecteurYoutube").innerHTML = 
    `<img src="https://kaamelott-gifboard.fr/gifs/jconnais-pas.gif">`
    document.querySelector("#mainInfo").innerHTML = 
    `<h1 id="filmTitle">Aucun film trouvé... Veuillez reesayer !</h1>`
    document.querySelector("#alt-info-container").remove()
}