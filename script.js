
function changeColor() {

  const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

  const randomIndex = Math.floor(Math.random() * colors.length);

  const body = document.body;

  body.style.backgroundColor = colors[randomIndex];
}
