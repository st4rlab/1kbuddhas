function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = array[currentIndex];
    currentIndex -= 1;
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function appendToParentOrBody(array) {
  for (let i = 0; i < array.length; i++) {
    let parent = array[i].parentElement;
    if (parent) {
      parent.appendChild(array[i]);
    } else {
      document.body.appendChild(array[i]);
    }
  }
}

function shuffleElementsAndAppendToBody(array) {
  showLoadingAnimation(document.querySelector('#buddhas-container')); // Show the loading animation

  setTimeout(function() {
    let shuffledArray = shuffle(array);
    appendToParentOrBody(shuffledArray);

    hideLoadingAnimation(document.querySelector('#buddhas-container')); // Hide the loading animation
  }, 1000); // The task takes 5 seconds to complete
}


function showLoadingAnimation(targetElement) {
  // Create the background overlay element
  var overlay = document.createElement('div');
  overlay.classList.add('loading-overlay');

  // Create the loading animation element
  var loadingAnimation = document.createElement('div');
  loadingAnimation.classList.add('loading-animation');

  // Add the loading animation to the background overlay
  overlay.appendChild(loadingAnimation);

  // Add the background overlay to the target element
  targetElement.appendChild(overlay);
}


function hideLoadingAnimation(targetElement) {
  // Find the loading animation element within the target element
  var loadingAnimation = targetElement.querySelector('.loading-animation');

  // Remove the loading animation from the target element
  loadingAnimation.remove();
}
