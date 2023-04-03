

// para sa darkmode
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



// para sa swiper sa activities

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",

    coverflowEffect: {
      rotate: 30,
      stretch: -20,
      depth: 200,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// Para sa modal
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var iframe = document.getElementById("resume-iframe");

//open modal
document.querySelectorAll('#slidetwo').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    modal.style.display = "block"; 
    iframe.src ="tribute.html";
  })
})

//  close modal
window.onclick = function(event) {
  if (event.target == modal || event.target == closeBtn) {
    modal.style.display = "none";
    iframe.src = "";
  }
}




