const toolsBtn = document.getElementById("nav-tools-open-btn");
const modulesBtn = document.getElementById("nav-modules-open-btn");
const navTools = document.getElementById("nav-tools");
const navModules = document.getElementById("nav-modules");
const filterForm = document.getElementById("filter");

let buttonsGroups = document.getElementsByClassName("nav-buttons-group");
buttonsGroups = [...buttonsGroups]; // convert HTML collection to array

let buttons = document.getElementsByClassName("nav-btn");
buttons = [...buttons]; // convert HTML collection to array

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

buttonsGroups.forEach((e) =>
  e.addEventListener("click", () => {
    foldAllButtonGroups();
    e.classList.remove("folded");
  })
);

buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    foldAllButtonGroups();
    console.log("clicked!");
  })
);

// =============================

function foldAllButtonGroups() {
  buttonsGroups.forEach((element) => {
    if (!element.classList.contains("folded")) {
      element.classList.add("folded");
    }
  });
}

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

function setButtonsGroupsHeights() {
  //calculate height of class elements .nav-buttons-group
  //for CSS transition proper working

  const groupContainerHeight = 64;
  const buttonHeightWithMargin = 68;

  buttonsGroups.forEach(
    (buttonsGroup) =>
      (buttonsGroup.style.height = `${
        groupContainerHeight +
        [...[...buttonsGroup.children][1].children].length *
          buttonHeightWithMargin
      }px`)
  );
}

setButtonsGroupsHeights();
