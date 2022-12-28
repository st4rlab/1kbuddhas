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
  showLoadingAnimation(); // Show the loading animation

  setTimeout(function() {
    let shuffledArray = shuffle(array);
    appendToParentOrBody(shuffledArray);

    hideLoadingAnimation(); // Hide the loading animation
  }, 5000); // The task takes 5 seconds to complete
}


function showLoadingAnimation() {
  // Create the loading animation element
  var loadingAnimation = document.createElement('div');
  loadingAnimation.classList.add('loading-animation');

  // Add the loading animation to the page
  document.body.appendChild(loadingAnimation);
}

function hideLoadingAnimation() {
  // Find the loading animation element
  var loadingAnimation = document.querySelector('.loading-animation');

  // Remove the loading animation from the page
  loadingAnimation.remove();
}
