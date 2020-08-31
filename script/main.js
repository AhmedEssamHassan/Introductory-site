const nav = document.querySelector(".nav-top");
const links = nav.querySelectorAll("a");
const navLinks = nav.querySelectorAll(".link");

/* nav par sticky */
const sticky = function () {
  if (window.scrollY > nav.scrollHeight) {
    nav.classList.add("sticky");
    nav.classList.remove("container");
    links.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    nav.classList.remove("sticky");
    nav.classList.add("container");
    links.forEach((link) => {
      link.style.color = "black";
    });
  }
  /* for moving on nav links  */
  if (window.scrollY === 0 && window.scrollY <= 371) {
    navLinks[0].style.borderBottom = "red solid 3px";
    navLinks[0].style.paddingBottom = "2px";
    navLinks[1].style.borderBottom = "none";
    navLinks[2].style.borderBottom = "none";
    navLinks[3].style.borderBottom = "none";
    navLinks[4].style.borderBottom = "none";
  } else if (window.scrollY > 371 && window.scrollY <= 3127) {
    navLinks[1].style.borderBottom = "red solid 3px";
    navLinks[1].style.paddingBottom = "2px";
    navLinks[0].style.borderBottom = "none";
    navLinks[2].style.borderBottom = "none";
    navLinks[3].style.borderBottom = "none";
    navLinks[4].style.borderBottom = "none";
  } else if (window.scrollY > 3127 && window.scrollY <= 4847) {
    navLinks[2].style.borderBottom = "red solid 3px";
    navLinks[2].style.paddingBottom = "2px";
    navLinks[0].style.borderBottom = "none";
    navLinks[1].style.borderBottom = "none";
    navLinks[3].style.borderBottom = "none";
    navLinks[4].style.borderBottom = "none";
  } else if (window.scrollY > 4847 && window.scrollY <= 5324) {
    navLinks[3].style.borderBottom = "red solid 3px";
    navLinks[3].style.paddingBottom = "2px";
    navLinks[0].style.borderBottom = "none";
    navLinks[1].style.borderBottom = "none";
    navLinks[2].style.borderBottom = "none";
    navLinks[4].style.borderBottom = "none";
  } else if (window.scrollY > 5324) {
    navLinks[4].style.borderBottom = "red solid 3px";
    navLinks[4].style.paddingBottom = "2px";
    navLinks[0].style.borderBottom = "none";
    navLinks[1].style.borderBottom = "none";
    navLinks[2].style.borderBottom = "none";
    navLinks[3].style.borderBottom = "none";
  }
};

window.addEventListener("scroll", sticky);

const up = document.querySelector(".ub-arrow");

up.addEventListener("click", () => {
  window.scrollY = 0;
});

/* 
const moveBorder = ()=> {
  
} */
