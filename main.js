const body = document.querySelector("body");
const btn = document.querySelector("button");
const box = document.querySelector(".score");
let point = 0;
let circleCount = 0;

let interval;

function createCircles() {
  
  circleCount++;
  
  let rnd = Math.floor(Math.random() * 360);
  let posx = Math.floor(Math.random() * 80 + 10);
  let posy = Math.floor(Math.random() * 80 + 10);
  
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = `hsl(${rnd}, 100%, 50%)`;
  circle.style.left = `${posx}%`;
  circle.style.top = `${posy}%`
  body.append(circle)
  
  setTimeout(() => {
    circle.remove()
  }, 3000)
  
  if (circleCount === 100) {
    alert(`${point} of ${circleCount}`)
    clearInterval(interval)
    point = 0;
    circleCount = 0;
    btn.style.display = "block";
  }
  
  box.innerHTML = `${point}`
}

body.addEventListener("click", e => {
  let isCircle = e.target.classList.contains("circle")
  if (isCircle) {
    point++;
    e.target.remove();
    console.log(`${point} of ${circleCount}`)
  }

})

btn.addEventListener("click", () => {
  interval = setInterval(createCircles, 400);
  btn.style.display = "none"
})