var words = [
  "Php",
  "javascript",
  "go",
  "MYSQL",
  "PL/SQL",
  "Photoshop",
  "bootstrap",
  "git",
  "githup",
  "PostgreSQL",
  "Oracle",
  "PYTHON",
  "C#",
];

var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-123456789",
  speed = 50,
  steps = 10,
  loader = document.querySelector("#loader-text"),
  currentIndex = 0;

function getNextWord() {
  var word = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length; // Wrap around to 0 when we reach the end of the array
  return word;
}

function getRandomLetter() {
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

function wordLoop() {
  var word = getNextWord(),
    textLength = word.length,
    i = 0;
  letterLoop(i, textLength, word);

  function letterLoop(i, textLength, word) {
    if (i < textLength) {
      var j = 0;
      charsAnimLoop(i, word, j);
    }
  }

  function charsAnimLoop(i, word, j) {
    if (j < steps) {
      randomChar(i, word, j);
    } else {
      goodChar(i, word);
    }
  }

  function randomChar(i, word, j) {
    var letter = getRandomLetter();
    if (j > 0) {
      var oldText = loader.textContent.slice(0, -1);
    } else {
      var oldText = loader.textContent;
    }
    loader.textContent = oldText + letter;

    j++;
    setTimeout(function () {
      charsAnimLoop(i, word, j);
    }, speed);
  }

  function goodChar(i, word) {
    var oldText = loader.textContent.slice(0, -1);
    loader.textContent = oldText + word[i];

    if (i < textLength - 1) {
      i++;
      setTimeout(function () {
        letterLoop(i, textLength, word);
      }, speed);
    } else if (i == textLength - 1) {
      setTimeout(function () {
        removeWord();
      }, speed * steps);
    }
  }

  function removeWord() {
    var k = 0;
    removeLetter(k);
  }

  function removeLetter(k) {
    var actualText = loader.textContent.slice(0, -1);
    loader.textContent = actualText;
    setTimeout(function () {
      if (k < textLength - 1) {
        k++;
        removeLetter(k);
      } else if (k == textLength - 1) {
        wordLoop();
      }
    }, speed);
  }
}

wordLoop();