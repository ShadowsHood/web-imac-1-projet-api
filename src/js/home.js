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

