function animateNumber(element, targetNumber, animationTime, startNumber = 0) {

  if (targetNumber > 600) {
    startNumber = Math.ceil(targetNumber / 1.25);
  }

  // Claculate the numbers to count
  const numToCount = targetNumber - startNumber;
  
  // Calculate interval ms to finish animation in the given animationTime
  const msPerNum = animationTime / numToCount;
  
  let number = startNumber;
  const timer = setInterval(function(){ 
    if (number <= targetNumber) {
        element.textContent = `${number}`;
        number++;
    } else {
      clearInterval(timer);
    }
  }, msPerNum);
}

const gbLeft = document.querySelector('.storage__span--left');
const gbUsed = document.querySelector('.storage__span--used');

animateNumber(gbLeft, 185, 950);
animateNumber(gbUsed, 815, 950);