const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .fa-sun");
const moonIcon = document.querySelector(".toggle .fa-moon");

toggle.addEventListener("change", () => {

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "fa-solid fa-sun" ? "fa-solid fa-sun" : "fa-solid fa-sun";
    moonIcon.className = moonIcon.className == "fa-solid fa-moon" ? "fa-solid fa-moon" : "fa-solid fa-moon";

}
);

//para sa modal
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var iframe = document.getElementById("resume-iframe");

//para open sa modal
document.querySelectorAll('.card2').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = "block";
    iframe.src ="johnreyresume.html";
  })
})

document.querySelectorAll('.card1').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = "block"; 
    iframe.src ="kayeresume.html"; 
  })
})


window.onclick = function(event) {
  if (event.target == modal || event.target == closeBtn) {
    modal.style.display = "none";
    iframe.src = "";
  }
}
