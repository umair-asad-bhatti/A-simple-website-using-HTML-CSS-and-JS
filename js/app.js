


//hamburger

let hamburger = document.getElementById("div_with_hamburger");
let ul = document.getElementById("div_with_ul");



hamburger.addEventListener("click", () => {

    ul.classList.toggle("changed");

});



//preloader
let preloader = document.querySelector(".preloader");


window.addEventListener("load", () => {

    preloader.classList.toggle("preloaderChanged");
})





// writing logics for counter in contact section

let contact=document.getElementById("contact")
console.log(contact)
contact.addEventListener("click",()=>{

    let counters = document.querySelectorAll(".counter");


    let factor = 200;

    counters.forEach(Element => {

        let update = () => {

            let dataTar = +Element.getAttribute("data-target");
            let Txt = +Element.innerText;
            let inc = (Math.ceil(dataTar / factor));
            if (Txt < dataTar) {
                Element.innerText = Txt + inc;
                setTimeout(update, 1);
            }
            else {
                Element.innerText = dataTar;
            }

        }
        update();

    })


})










