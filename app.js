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

/* function creation de vignette / function create sticker */
const sticker = document.querySelector(".sticker")
function createQuestion() {
    const questionName = document.createElement("h3")
    sticker.appendChild(questionName)

    const bigBox = document.createElement("div")
    bigBox.classList.add("box1")
    sticker.appendChild(bigBox)

    const btn1 = document.createElement("button")
    btn1.classList.add("answer div1")
    bigBox.appendChild(btn1)

    const btn2 = document.createElement("button")
    btn2.classList.add("answer div2")
    bigBox.appendChild(btn2)

    const btn3 = document.createElement("button")
    btn3.classList.add("answer div3")
    bigBox.appendChild(btn3)

    const btn4 = document.createElement("button")
    btn4.classList.add("answer div4")
    bigBox.appendChild(btn4)

    const bigBox2 = document.createElement("div")
    bigBox2.classList.add("box2")
    sticker.appendChild(bigBox2)

    const btn5 = document.createElement("div")
    btn5.classList.add("div5")
    bigBox2.appendChild(btn5)

    const btnNext = document.createElement("div")
    btnNext.classList.add("next")
    bigBox2.appendChild(btnNext)






}
