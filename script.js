const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const formular = document.querySelector("form");
const signupEmail = document.querySelector(".sign-up-email");
const result = document.querySelector(".result");

// Hamburger and Cross icons change
hamburgerIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else if (hamburgerIcon.classList[1] === "fa-xmark") {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});

// Formular in footer
formular.addEventListener("submit", (event) => {
  event.preventDefault();

  if (signupEmail.value === "") {
    result.textContent = "Missing - input email!";
    result.style.color = "red";
  } else {
    result.textContent = "Thank you, Welcome";
    result.style.color = "black";
  }
});
