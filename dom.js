import question from './question.js';

/* function creation de vignette / function create sticker */

let temporaryScore = 0;
const validScore = [];
let finalScore = 0;

let questionNum = 0;

const section = document.querySelector('section:nth-child(2)');

function createQuestion({ name, answers, advice, url }) {
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

  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.textContent = 'Clique ici !';
  newDetails.appendChild(a);

  const newDivButton = document.createElement('div');
  newDivButton.classList.add('next');
  bigBox2.appendChild(newDivButton);

  const btnNext = document.createElement('button');
  btnNext.classList.add('next');
  btnNext.innerText = 'Suivant';
  newDivButton.appendChild(btnNext);

  //bouton next

  btnNext.addEventListener('click', () => {
    if (newSection.parentNode) {
      newSection.parentNode.removeChild(newSection);
    }
    finalScore += temporaryScore;
    questionNum++;
    if (questionNum < question.length) {
      temporaryScore = 0;
      createAffScore();
      createQuestion(question[questionNum]);
    } else {
      console.log('Final Score:', finalScore);
      const userName = [userNameInput.value.trim()];
      listFinalScore.push(finalScore);
      questionNum = 0;
      createMessage();
      createAffScore();
      readCreateTable();
    }
  });
}

//Création affichage score

const affichageScore = document.querySelector('#affichagescore');

function createAffScore() {
  const p = document.createElement('p');
  p.classList.add('result');
  p.innerText = finalScore;
  affichageScore.appendChild(p);

  supprPrecedent(p);
}

// création message
const message = document.querySelector('.message');

function createMessage() {
  const h2 = document.createElement('h2');
  h2.innerText = h1Message();
  message.appendChild(h2);

  const p = document.createElement('p');
  p.innerText = `Tu as obtenu un score de ${finalScore} pts! Pour améliorer ton score n’hésites pas à suivre les conseils proposés dans chaque question.`;
  h2.appendChild(p);

  supprPrecedent(h2);
}

function supprPrecedent(elem) {
  if (elem.previousSibling) {
    elem.parentNode.removeChild(elem.previousSibling);
  }
}

function h1Message() {
  if (finalScore >= 70) {
    return 'Bravo ! Tu as obtenu un excellent score !';
  } else if (finalScore > 40) {
    return 'Pas mal ! Tu es sur la bonne voie !';
  } else {
    return 'Tu peux faire mieux !';
  }
}

/* création tableau*/

const rang = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const userNameInput = document.getElementById('userName');

const listUser = ['Cécile', 'Paul'];
console.log(listUser);

const listFinalScore = ['75', '60'];
console.log(listFinalScore);

function createTable(rang, userName, listFinalScore) {
  const tr = document.createElement('tr');

  const tdRang = document.createElement('td');
  tdRang.innerText = rang;
  tr.appendChild(tdRang);

  const tdUserName = document.createElement('td');
  tdUserName.innerText = userName;
  tr.appendChild(tdUserName);

  const tdScore = document.createElement('td');
  tdScore.innerText = listFinalScore;
  tr.appendChild(tdScore);

  document.getElementById('tableScore').appendChild(tr);
}

function readCreateTable() {
  for (let i = 0; i < rang.length; i++) {
    if (listUser[i] !== undefined) {
      createTable(rang[i], listUser[i], listFinalScore[i]);
    } else {
      break;
    }
  }
}

/*bouton démarrer et lancement de la premiere question */

const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
  const inputName = document.querySelector('#userName');
  if (inputName.value === '') {
    window.alert('Saisissez votre prénom pour commencer');
  } else {
    createQuestion(question[0]);
    listUser.push(inputName.value.trim());
    finalScore = 0;
  }
});

export { createTable };
