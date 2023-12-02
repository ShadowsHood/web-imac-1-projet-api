var tag = document.createElement('script');
            
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




async function searchFilm(name) {
    const responseOMDB = await fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592");
    const film = await responseOMDB.json();
    console.log(film);
    let monFilm = film.Title;
    if(monFilm == "undefined"){
        document.querySelector(".YoutubeBox").innerHTML = `
        <img src="https://kaamelott-gifboard.fr/gifs/jconnais-pas.gif">
    `
    }else{
        /*const responseYTB = await fetch("https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=bande%20annonce%20francais%20"+monFilm+"&type=video&key=AIzaSyDUWcSrdcXJM7uewjk5BaKs8FDNJPqvphQ");
        const maVideo = await responseYTB.json();
        let videos = maVideo.items;
        for(video of videos){
            let myNewLink = "https://www.youtube.com/embed/"+(video.id.videoId);*/
            let myNewLink = "https://www.youtube.com/embed/BCCwCSdXRSE?si=38oZbTNsThjB5eoe";
            document.querySelector(".YoutubeBox").innerHTML = `
                <iframe width=100% height=500px src=`+myNewLink+` title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
        //};
    }
}









// let monFilm = "initValue";

// fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592")
// .then(result => result.json())
// .then((data) => {
//     let div = document.getElementById("info");
//     div.innerHTML = film.Title;
//     monFilm = film.Title;
// })


// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q="+monFilm+"%20trailer%20francais&key=AIzaSyBVWlazW8DPFqh-oMJ45cRRlSi8vCYPy9E")
// .then(result => result.json())
// .then((data) =>{

// } 
// )
