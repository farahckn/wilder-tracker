import question from './question.js';
import { createQuestion, createTable } from './dom.js';

/*function Burger*/
document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.getElementById('mySidenav');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add('active');
  }

  function closeNav() {
    sidenav.classList.remove('active');
  }
});

// sauvegarder le nom de l'input

//let idBouton1 = document.getElementById('bouton1');
let idInput1 = document.getElementById('input1');
let tableau = [];

// idBouton1.addEventListener('click', intro); //valide l'entrée par le bouton
// idInput1.onkeyup = function () {
//   if (event.keyCode == 13) intro();
// };

//valide l'input par la touche entrée

function intro() {
  idInput2.value = ''; //à chaque appel initialise l'affichage du champ afin de voir le "placeholder"
  tableau[x] = idInput1.value; // enregistre la valeur du champ dans un tableau
}

/* bouton démarrer et lancement de la premiere question*/

const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
  const inputName = document.querySelector('#userName');

  if (inputName.value === '') {
    window.alert('Saisissez votre prénom pour commencer');
  } else {
    createQuestion(question[0]);
  }
});

/* button question*/

function answerChoice() {
  const button = document.getElementsByClassName('answer');
  button.style.color = 'blue';
}

/*paramétrage score*/
/*
let score = 0;
const affichageScore = document.getElementById("result") /*ok vérif*/
/*
affichageScore.innerText = "test";

function handleButtons(boxClass) {

const buttonNext = box.getElementsByClassName('next');

for (let i = 0; i < buttons.length; i++) {
  buttonNext.addEventListener('click', function() {
      if (button.answer:) /*il faut trouver un moyen de conserver la réponse de l'utilisateur*/

/*
    const answer = this.getAttribute('class');
    let earnedPoints = 0;

    if (answer === "answer", "div1") {
      earnedPoints += 20;
    } else if (answer === "answer", "div2") {
      earnedPoints += 15;
    } else if (answer === "answer", "div3") {
      earnedPoints += 10;
    } else if (answer === "answer", "div4") {
      earnedPoints += 5;
    }

    score += earnedPoints;
    affichageScore.innerHTML = ${score};
  });
}
}

handleButtons('.box1');*/

/* Début fonction Cécile Classement
for (let i = 0; i < rang.length;i++){
  if (userName[i] !== undefined) {
  createTable(rang[i],userName[i],score[i])
  } else {
      breack
  }
}
/* Fin fonction Cécile Classement*/
