let selection = document.querySelector("select");
let container = document.getElementById("backgroung");
console.log(container);

selection.addEventListener("change", () => {
  var city = selection.options[selection.selectedIndex].value;
  if (city == "surat") {
    container.classList.remove("vadodra", "nadiad", "anand");
    container.classList.add("surat");
    alert("Surat is famous for Diamond and food.the dish surati locho is very famous all over gujarat.and surat is well known for dimond buisness.");
  } else if (city == "vadodra") {
    container.classList.remove("surat", "nadiad", "anand");
    container.classList.add("vadodra");
    alert("Vadodra is famous for farshan specially for jagdish farshan it is also famous for cloths.");
  } else if (city == "nadiad") {
    container.classList.remove("surat", "vadodra", "anand");
    container.classList.add("nadiad");
    alert("Nadiad is famous for their santram mandir it is also known as green city nadiad.");
  } else {
    container.classList.remove("surat", "vadodra", "nadiad");
    container.classList.add("anand");
    alert("Anand is famous for their Amul dairy and colleges.");
  }
});
