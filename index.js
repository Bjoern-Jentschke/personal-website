const bodyElement = document.querySelector('[data-js="body"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');

lightMode.addEventListener("click", () => {
    bodyElement.classList.add("button--light");
})