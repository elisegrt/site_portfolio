var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var closeBtn2 = document.getElementById("close");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
closeBtn2.onclick = closeNav;


/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

const gotop = document.querySelector('#top');

        gotop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })

var graphisme = document.getElementById("graphisme");
var front = document.getElementById("front");
var audio = document.getElementById("audio");
var descrip = document.getElementById("descrip");
var graphisme2 = document.getElementById("graphisme2");
var front2 = document.getElementById("front2");
var audio2 = document.getElementById("audio2");
var descrip2 = document.getElementById("descrip2");

graphisme.onclick = scroll;
graphisme2.onclick = scroll;
front.onclick = scroll2;
front2.onclick = scroll2;
audio.onclick = scroll3;
audio2.onclick = scroll3;
descrip.onclick = scroll4;
descrip2.onclick = scroll4;

function scroll(){
    window.scrollTo({
        top: 790,
        left: 0,
        behavior: "smooth"
    })
}

function scroll2(){
    window.scrollTo({
        top:2150,
        left: 0,
        behavior: "smooth"
    })
}

function scroll3(){
    window.scrollTo({
        top: 3530,
        left: 0,
        behavior: "smooth"
    })
}

function scroll4(){
    window.scrollTo({
        top: 4720,
        left: 0,
        behavior: "smooth"
    })
}

var section = document.querySelector('.accueil');
var fleche = document.querySelector('#fleche');

// Ajout d'un écouteur d'événements au scroll
window.addEventListener('scroll', function() {
  // Récupération de la position de la section et de la div
  var sectionRect = section.getBoundingClientRect();
  var flecheRect = fleche.getBoundingClientRect();

  // Calcul de la position de la fin de la section
  var sectionBottom = sectionRect.top + sectionRect.height;

  // Si la position de la fin de la section est inférieure à la position de la div
  if (sectionBottom < flecheRect.top) {
    // Ajout de la classe 'fixed' à la div
    fleche.classList.add('fixed');
  } else {
    // Suppression de la classe 'fixed' de la div
    fleche.classList.remove('fixed');
  }
});


const blancs = document.querySelectorAll('.blanc');
const noir = document.querySelector('.noir');

// fonction pour ajouter la classe
function addPanelClass() {
  if (window.innerWidth > 639) {
    blancs.forEach(blanc => {
      blanc.classList.add('panel');
    });
    noir.classList.add('panel');
  } 
}

addPanelClass();
window.addEventListener('resize', addPanelClass);

const blancs2 = document.querySelectorAll('.blanc.panel');
const noir2 = document.querySelector('.noir.panel');
function addPanelClass2() {
  if (window.innerWidth < 639) {
    blancs2.forEach(blanc => {
      blanc.classList.remove('panel');
    });
    noir2.classList.remove('panel');
  } 
}

addPanelClass2();
window.addEventListener('resize', addPanelClass2);




const btng = document.querySelector('#graphisme');
const btng2 = document.querySelector('#graphisme2');
const btnf = document.querySelector('#front');
const btnf2 = document.querySelector('#front2');
const btna = document.querySelector('#audio');
const btna2 = document.querySelector('#audio2');
const btn4 = document.querySelector('#descrip');
const btn5 = document.querySelector('#descrip2');
const btn6 = document.querySelector('#descrip3');


        btng.addEventListener('click', () => {
            window.scrollTo({
                top: 720,
                left: 0,
                behavior: "smooth"
            })
        })

        btng2.addEventListener('click', () => {
            window.scrollTo({
                top: 720,
                left: 0,
                behavior: "auto"
            })
        })

        btnf.addEventListener('click', () => {
            window.scrollTo({
                top: 2690,
                left: 0,
                behavior: "smooth"
            })
        })

        btnf2.addEventListener('click', () => {
            window.scrollTo({
                top:2750,
                left: 0,
                behavior: "smooth"
            })
        })

        btna.addEventListener('click', () => {
            window.scrollTo({
                top: 4690,
                left: 0,
                behavior: "smooth"
            })
        })

        btna2.addEventListener('click', () => {
            window.scrollTo({
                top: 4730,
                left: 0,
                behavior: "auto"
            })
        })

        btn4.addEventListener('click', () => {
            window.scrollTo({
                top: 5450,
                left: 0,
                behavior: "auto"
            })
        })

        btn5.addEventListener('click', () => {
            window.scrollTo({
                top: 5450,
                left: 0,
                behavior: "auto"
            })
        })
        
        btn6.addEventListener('click', () => {
            window.scrollTo({
                top: 5450,
                left: 0,
                behavior: "smooth"
            })
        })


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel")

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        start: "bottom bottom",
        scrub: 0.5,
        pin: true,
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 1 },
        },
        end: ("+=4000"),

    },
});





