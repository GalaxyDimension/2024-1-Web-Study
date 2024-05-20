const changeColorBtn = document.getElementById("changeColorBtn");

const colors = [
  "#ef5777",
  "#575fcf",
  "#ff3f34",
  "#ffffff",
  "#123456",
  "#DC143C",
  "#00FFFF",
  "#FF00FF",
  "#800080"
  ];

const changeBackgroundColor = () => {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  if (randomColor1 === randomColor2) {
    return changeBackgroundColor();
  }
  document.body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
};

changeColorBtn.addEventListener("click", changeBackgroundColor);
