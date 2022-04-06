const number = Number(prompt("Enter number:"));
const Container = document.getElementById("container");
const p = document.getElementById("list");
let str = "";
for (let i = 1; i <= number; i++) {
  str = str + `${i}\n` + "<br>";
}
p.innerHTML = str;
