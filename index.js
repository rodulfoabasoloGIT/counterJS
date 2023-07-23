let count = document.querySelector("h2");
let counts = 0;
const buttons = document.querySelectorAll(".buttons button");

//reset
buttons[1].addEventListener("click", (e) => {
  count.textContent = counts = 0;
});
//inc
buttons[2].addEventListener("click", (e) => {
  count.textContent = counts += 1;
});
//decrease
buttons[0].addEventListener("click", () => {
  if (counts == 0) {
    buttons[0].disabled = false;
  } else {
    count.textContent = counts -= 1;
  }
});
