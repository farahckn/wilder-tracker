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

// let score = 0

// function questionAnswer() {
//     const button = document.querySelector("button");

//     button.addEventListener("click", (event) => {
//         if (event === button.div1) {
//             score += 20;
//         } else if (event === button.div2) {
//             score += 15;
//         } else if (event === button.div3) {
//             score += 10;
//         } else if (event === button.div4) {
//             score += 5
//         } else {
//             score += 0
//         }
//         console.log(`score : ${points}`);
//     })
// }


// vaut pour une box (question) donc à réiterer pour chaque question x5
let score = 0;
const affichageElement = document.querySelector('Box1');

function handleButtons(boxClass) {
    const box = document.querySelector(boxClass);
    const buttons = box.getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const answer = this.getAttribute('data-answer');
      let earnedPoints = 0;

      if (answer === div1) {
        earnedPoints += 20;
      } else if (answer === div2) {
        earnedPoints += 15;
      } else if (answer === div3) {
        earnedPoints += 10;
      } else if (answer === div4) {
        earnedPoints += 5;
      }

      score += earnedPoints;
      affichageElement.textContent = `Score: ${score}`;
    });
  }
}

handleButtons('.box1');
