'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleButtons = document.querySelectorAll("[data-toggle-btn]");
const paragraphs = document.querySelectorAll(".toggle-paragraphs > div");

// Lists for skills, tools, and languages
const skillsList = document.querySelector(".skills-list");
const toolsList = document.querySelector(".tools-list");
const languagesList = document.querySelector(".languages-list");

// Initialize: Show only skills by default
skillsList.style.display = "none"
toolsList.style.display = "none"; 
languagesList.style.display = "flex"

paragraphs.forEach((p, index) => {
  p.classList.toggle("active", index === 2); // Show first paragraph
});

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    paragraphs.forEach(p => p.classList.remove("active"));
    toggleButtons.forEach(btn => btn.classList.remove("active"));

    // Activate the clicked button and paragraph
    button.classList.add("active");
    paragraphs[index].classList.add("active");

    // Show the corresponding list
    if (index === 0) {
      showList(skillsList);
      hideList(toolsList);
      hideList(languagesList);
    } else if (index === 1) {
      showList(toolsList);
      hideList(skillsList);
      hideList(languagesList);
    } else if (index === 2) {
      showList(languagesList);
      hideList(skillsList);
      hideList(toolsList);
    }
  });
});

// Helper functions to show/hide lists
function showList(list) {
  list.style.display = "flex";
}

function hideList(list) {
  list.style.display = "none";
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");
const themeImg = document.getElementById("theme-banner"); // Image to toggle

// Helper to update image based on theme
function updateThemeImage(theme) {
  if (theme === "light_theme") {
    themeImg.src = "https://i.gifer.com/Twyn.gif";
  } else {
    themeImg.src = "https://i.gifer.com/1zLe.gif"; // or .png, depending on your asset
  }
}

// Button click handler
themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
    updateThemeImage("light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
    updateThemeImage("dark_theme");
  }
});

// On page load, apply saved theme and update image
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
  updateThemeImage("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
  updateThemeImage("dark_theme");
}


/* skills slider `*/
const buttons = document.querySelectorAll(".toggle-btn");
  const indicator = document.querySelector(".toggle-indicator");

  function moveIndicator(button) {
    const { offsetLeft, offsetWidth } = button;
    indicator.style.left = offsetLeft + "px";
    indicator.style.width = offsetWidth + "px";
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".toggle-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      moveIndicator(btn);
    });
  });

  // Initialize position on load
  window.addEventListener("DOMContentLoaded", () => {
    const activeBtn = document.querySelector(".toggle-btn.active");
    if (activeBtn) moveIndicator(activeBtn);
  });



  