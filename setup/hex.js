const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.getElementById("btn").addEventListener("click", function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    color += hex[randomIndex];
  }
  document.body.style.backgroundColor = color;
});
