import question from './question.js';

/* function creation de vignette / function create sticker */
let temporaryScore = 0;
const validScore = [];
let finalScore = 0;

let questionNum = 0;

const section = document.querySelector('section:nth-child(2)');

function createQuestion({ name, answers, advice }) {
  const newSection = document.createElement('section');
  newSection.classList.add('sticker');
  section.appendChild(newSection);

  const questionName = document.createElement('h3');
  questionName.innerText = name;
  newSection.appendChild(questionName);

  const bigBox = document.createElement('div');
  bigBox.classList.add('box1');
  newSection.appendChild(bigBox);

  answers.forEach(({ text, gif, point }, i) => {
    const btnAnswer = document.createElement('button');
    btnAnswer.classList.add('answer', `div${i + 1}`);
    btnAnswer.innerText = text;
    bigBox.appendChild(btnAnswer);

    const img = document.createElement('img');
    img.src = gif;
    btnAnswer.appendChild(img);

    btnAnswer.addEventListener('click', () => {
      const buttonChoice = document.querySelectorAll('.answer');
      // Ajout d'un écouteur d'événements à chaque bouton
      // Retirer la classe 'selected' de tous les boutons
      buttonChoice.forEach(function (b) {
        b.classList.remove('buttonChoice');
      });
      // Ajouter la classe 'selected' uniquement au bouton cliqué
      btnAnswer.classList.add('buttonChoice');
      temporaryScore = point;
      console.log(temporaryScore);
    });
  });

  const bigBox2 = document.createElement('div');
  bigBox2.classList.add('box2');
  newSection.appendChild(bigBox2);

  const newDetails = document.createElement('details');
  newDetails.classList.add('div5');
  newDetails.innerText = advice;
  bigBox2.appendChild(newDetails);

  const newSummary = document.createElement('summary');
  newSummary.innerText = 'Regarde';
  newDetails.appendChild(newSummary);

  const newDivButton = document.createElement('div');
  newDivButton.classList.add('next');
  bigBox2.appendChild(newDivButton);

  const btnNext = document.createElement('button');
  btnNext.classList.add('next');
  btnNext.innerText = 'Suivant';
  newDivButton.appendChild(btnNext);

  btnNext.addEventListener('click', () => {
    //Ajouter le score temporaire au score total
    //Passer à la suite
    questionNum++;
    createQuestion(question[questionNum]);
    //Condition si dernière carte afficher résultat
  });
}

//createQuestion(question[4]);

/* partie DOM cécile début*/
const rang = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const userName = ['jean', 'paul', 'pierre', 'lola', 'bob'];
const score = [12, 15, 50, 60, 80];

function createTable(rang, userName, score) {
  const tr = document.createElement('tr');

  const tdRang = document.createElement('td');
  tdRang.innerText = `${rang}`;
  tr.appendChild(tdRang);

  const tdUserName = document.createElement('td');
  tdUserName.innerText = `${userName}`;
  tr.appendChild(tdUserName);

  const tdScore = document.createElement('td');
  tdScore.innerText = `${score} pts`;
  tr.appendChild(tdScore);

  document.getElementById('tableScore').appendChild(tr);
}

/* partie DOM cécile fin*/

export { createQuestion, createTable };
