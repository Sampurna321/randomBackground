let colors = ["blue", "yellow", "black"];
let button = document.getElementById("button");
button.addEventListener("click", function () {
  length = colors.length;
  position = Math.floor(Math.random() * length);
  colorName = colors[position];
  document.getElementById("container").style.backgroundColor = colorName;
});
