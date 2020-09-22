let timer = 100;
const animationLoop = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

const loadingAnimation = function() {
  for (let animation of animationLoop) {
    setTimeout(() => process.stdout.write(`\r${animation}   `), timer);
    timer += 200;
    if (timer === 1700) {
      setTimeout(() => process.stdout.write("\n"), 1900);
    }
  }
}

loadingAnimation();