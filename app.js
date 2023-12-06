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

/* partie JS cécile début*/
const rang = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const userName = ["jean","paul","pierre","lola","bob"]
const score= [12,15,50,60,80]

function createTable (rang,userName, score) {

 const tr = document.createElement("tr");

 const tdRang = document.createElement("td");
 tdRang.innerText =`${rang}`
 tr.appendChild(tdRang);

 const tdUserName = document.createElement("td");
 tdUserName.innerText =`${userName}`
 tr.appendChild(tdUserName);

 const tdScore = document.createElement("td");
 tdScore.innerText =`${score} pts`
 tr.appendChild(tdScore);

 document.getElementById('tableScore').appendChild(tr);
}

for (let i = 0; i < rang.length;i++){
    if (userName[i] !== undefined) {
    createTable(rang[i],userName[i],score[i])
    } else {
        breack
    }
}

/* partie JS cécile fin*/
