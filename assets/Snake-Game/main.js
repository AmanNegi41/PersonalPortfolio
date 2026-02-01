const canvas = document.querySelector("#game-canvas");
const Score = document.querySelector("#score");
const stopBtn = document.querySelector("#pause-resume");
const resetBtn = document.querySelector("#reset");
const Start = document.querySelector("#startGame");
let score = 0;

let snake = [
  {x: 100, y: 100},
  {x: 80, y: 100}
]

const ctx = canvas.getContext("2d");
function drawSnake(){
  ctx.fillStyle = "green";
  for(i = 0; i < snake.length; i++){
    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
  }
}
drawSnake();

let food = [];
food.push({
  x: Math.floor(Math.random() * 20) * 20,
  y: Math.floor(Math.random() * 20) * 20,
});
function drawFood() {
  ctx.fillStyle = "red";
  for (let i = 0; i < food.length; i++) {
    ctx.fillRect(food[i].x, food[i].y, 20, 20);
  }
}
drawFood();

let direction = "right";
function changeDirection(evt) {
  const keyPressed = evt.key;
  if (keyPressed === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (keyPressed === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (keyPressed === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (keyPressed === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
}

function updateDirection() {
  const head = { x: snake[0].x, y: snake[0].y };

  switch (direction) {
    case "up":
      head.y -= 20;
      break;
    case "down":
      head.y += 20;
      break;
    case "left":
      head.x -= 20;
      break;
    case "right":
      head.x += 20;
  }
  snake.unshift(head);
  snake.pop();
}

function checkCollision() {
  if (
    snake[0].x < 0 ||
    snake[0].x >= canvas.width ||
    snake[0].y < 0 ||
    snake[0].y >= canvas.height
  ) {
    alert("Game over! snake hit the wall Your score: " + score);
    clearInterval(gameInterval);
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      alert("Game over! snake hit itself Your score: " + score);
      clearInterval(gameInterval);
    }
  }
}

function checkFoodCollision() {
  for (let i = 0; i < food.length; i++) {
    if (snake[0].x === food[i].x && snake[0].y === food[i].y) {
      snake.push({
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y,
      });
      food[i] = {
        x: Math.floor(Math.random() * (canvas.width / 20)) * 20,
        y: Math.floor(Math.random() * (canvas.height / 20)) * 20,
      };

      score += 10;
      Score.innerHTML = `Score: ${score}`;
    }
  }
}
checkFoodCollision();

let isPaused = false;
stopBtn.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(gameInterval);
    stopBtn.innerHTML = "Resume Game";
  } else {
    gameInterval = setInterval(gameLoop, 150);
    stopBtn.innerHTML = "Pause Game";
  }
  isPaused = !isPaused;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateDirection();
  drawSnake();
  drawFood();
  checkCollision();
  checkFoodCollision();
}

let gameInterval = setInterval(gameLoop, 150);
document.addEventListener("keydown", changeDirection);
