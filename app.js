/*function Burger*/
document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
  
    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
  
    function openNav() {
      sidenav.classList.add("active");
    }
  
    function closeNav() {
      sidenav.classList.remove("active");
    }
  });
  
