    
async function afficherInBox(name, boxNumber){
    const responseOMDB = await fetch("http://www.omdbapi.com/?t="+name+"&apikey=2d2c5592");
    const film = await responseOMDB.json();
    console.log(film);
    document.querySelector("#boite"+boxNumber).innerHTML = `
    <img src="`+film.Poster+`"></p>
    `;
};




afficherInBox("Avatar", "1");
afficherInBox("Wall E", "2");
afficherInBox("Harry Potter", "3");


