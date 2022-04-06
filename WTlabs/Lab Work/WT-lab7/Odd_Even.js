const number = Number(prompt("Enter number:"));
const Container = document.getElementById("container");
const p = document.getElementById("para");

if (number % 2 == 0) {
  Container.classList.add("bg_color");
  p.innerHTML = `${number} is even`;
} else {
  Container.classList.add("bg_color2");
  p.innerHTML = `${number} is odd`;
}
