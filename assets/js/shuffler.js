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
  let shuffledArray = shuffle(array);
  appendToParentOrBody(shuffledArray);
}
