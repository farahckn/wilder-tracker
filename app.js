import question from './question.js';
import { createTable } from './dom.js';

/* function Burger */
document.addEventListener('DOMContentLoaded', () => {
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

// let idBouton1 = document.getElementById('bouton1');
const idInput1 = document.getElementById('input1');
const tableau = [];

// idBouton1.addEventListener('click', intro); //valide l'entrée par le bouton
// idInput1.onkeyup = function () {
//   if (event.keyCode == 13) intro();
// };

// valide l'input par la touche entrée

function intro() {
  idInput2.value = ''; // à chaque appel initialise l'affichage du champ afin de voir le "placeholder"
  tableau[x] = idInput1.value; // enregistre la valeur du champ dans un tableau
}

/* bouton démarrer et lancement de la premiere question

const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
  const inputName = document.querySelector('#userName');

  if (inputName.value === '') {
    window.alert('Saisissez votre prénom pour commencer');
  } else {
    createQuestion(question[0]);
    finalScore = 0
  }
}); */

/* button question */


/* paramétrage score */

/*
let score = 0;
const affichageScore = document.getElementById("result") /*ok vérif */
/*
affichageScore.innerText = "test";

function handleButtons(boxClass) {

const buttonNext = box.getElementsByClassName('next');

for (let i = 0; i < buttons.length; i++) {
  buttonNext.addEventListener('click', function() {
      if (button.answer:) /*il faut trouver un moyen de conserver la réponse de l'utilisateur */

/* Début fonction Cécile Classement




const rang = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const listUser = ['Cécile', 'Paul'];
listUser.push('bob');
const listFinalScore = ['15', '45'];
listFinalScore.push(finalScore);

for (let i = 0; i < rang.length; i++) {
  if (user[i] !== undefined) {
    createTable(rang[i], user[i], finalScore[i]);
  } else {
    breack;
  }
}
/* Fin fonction Cécile Classement */
