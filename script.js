const toolsBtn = document.getElementById("nav-tools-open-btn");
const modulesBtn = document.getElementById("nav-modules-open-btn");
const navTools = document.getElementById("nav-tools");
const navModules = document.getElementById("nav-modules");
const filterForm = document.getElementById("filter");

// initially remove hide from tools for development
navTools.classList.remove("hide");

toolsBtn.addEventListener("click", (e) => {
  toggleNavTools();
  hideNavModules();
});

modulesBtn.addEventListener("click", (e) => {
  toggleNavModules();
  hideNavTools();
});

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

function toggleNavTools() {
  if (navTools.classList.contains("hide")) {
    navTools.classList.remove("hide");
  } else {
    navTools.classList.add("hide");
  }
}

function hideNavTools() {
  if (!navTools.classList.contains("hide")) {
    navTools.classList.add("hide");
  }
}

function toggleNavModules() {
  if (navModules.classList.contains("hide")) {
    navModules.classList.remove("hide");
  } else {
    navModules.classList.add("hide");
  }
}

function hideNavModules() {
  if (!navModules.classList.contains("hide")) {
    navModules.classList.add("hide");
  }
}
