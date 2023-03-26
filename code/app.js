// Navigation
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Tabs

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

let tabFocus = 0;
function changeTabFocus(e) {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  // Change the tabindex of the current tab to -1
  if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  // If the right key is pushed, move to the next tab on the right
  if (e.keyCode === keyDownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  // If the left key is pushed, move to the next tab on the left
  if (e.keyCode === keyDownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}
