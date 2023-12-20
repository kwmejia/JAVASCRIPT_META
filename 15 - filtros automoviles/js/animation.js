/**Selecciono el banner */
const banner = document.querySelector(".banner");

//Cada 2,2 segundos el background cambiará
setInterval(function () {

    /**Cambio el backcground */
    banner.style.backgroundImage = "url(img/bg-light.jpg)";

    setTimeout(function () {
        /**Cambio el backcground */

        banner.style.backgroundImage = "url(img/bg.jpg)";

    }, 1000)
}, 2200)