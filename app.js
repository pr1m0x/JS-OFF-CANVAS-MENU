/* globals */
// ========================
// Variables
// ========================
const body = document.body;
const button = document.querySelector("button");
const menu = document.querySelector(".off-container");

// ========================
// Functions
// ========================

/**
 * @returns {boolean} reads classes of body element and returns boolean
 */
function checkCanvas() {
  return body.classList.contains("offsite-is-open");
}

/**
 * adds class .offsite-is-open to body element
 */
function openCanvas() {
  body.classList.add("offsite-is-open");
}

/**
 * removes class .offsite-is-open to body element
 */
function closeCanvas(asdas) {
  body.classList.remove("offsite-is-open");
}

// ========================
// Events
// ========================

/**
 * triggers click event
 * runs closeCanvas() or openCanvas() based on the boolean checkCanvas() returns
 */
button.addEventListener("click", () => {
  checkCanvas() ? closeCanvas() : openCanvas();
});
