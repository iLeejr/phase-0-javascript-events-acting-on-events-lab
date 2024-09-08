// Your code here
// index.js

// Function to move the dodger left
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Function to move the dodger right
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // 400px (width of game) - 40px (width of dodger) = 360px
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Add event listener to handle keydown events
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  