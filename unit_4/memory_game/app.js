(function () {
  // TODO: create a settings UI to allow the user to choose a difficulty level and category of images (animals, space)

  const images = {
    animals: [
      "bat",
      "bear",
      "boar",
      "cat",
      "cow",
      "deer",
      "dog",
      "fox",
      "frog",
      "giraffe",
      "gorilla",
      "hamster",
      "koala",
      "lion",
      "monkey",
      "mouse",
      "owl",
      "panda",
      "pig",
      "rabbit",
      "tiger",
      "wolf",
    ],
    space: [
      "asteroid",
      "black-hole",
      "earth",
      "galaxy",
      "jupiter",
      "lander",
      "mars-rover",
      "mars",
      "mercury",
      "meteorites",
      "moon",
      "neptune",
      "planet",
      "radar",
      "satellite",
      "saturn",
      "space-shuttle-1",
      "space-shuttle",
      "sun",
      "telescope",
      "uranus",
      "venus",
    ],
  };
  // Difficulty: Easy (4 images), Medium (9 images), Hard (14 images)
  const difficulty = { level: "medium", variety: 9 };
  // Kind: Animals, Space
  let kind = "animals";
  let generatedCards;
  let selectedCards;
  let totalSelectedCards;
  let isClickDisabled = false;
  let score;
  let nextPoint;
  let bestScore = parseInt(localStorage.getItem("BEST_SCORE"), 10) || 0;

  const scoreUI = document.querySelector(".score");
  const bestScoreUI = document.querySelector(".best-score");
  const restartButton = document.querySelector("button");

  const cardsUI = document.querySelector(".cards");
  cardsUI.classList.add(difficulty.level);

  function startNewGame() {
    selectedCards = [];
    totalSelectedCards = [];
    score = 0;
    nextPoint = 20;

    scoreUI.innerText = score;
    bestScoreUI.innerText = bestScore;
    generatedCards = generateCards();

    for (let card of generatedCards) {
      cardsUI.append(card);
    }
  }

  startNewGame();

  restartButton.addEventListener("click", (evt) => {
    for (let card of totalSelectedCards) {
      card.classList.remove("flip");
    }

    // Reset cardsUI content to prevent redundant content
    cardsUI.innerHTML = "";

    startNewGame();
  });

  cardsUI.addEventListener("click", cardClickHandler);

  function cardClickHandler(evt) {
    // Disallow the action while there is an ongoing click event process
    if (isClickDisabled) return;

    const selectedCard = evt.target.closest(".card-container");

    // Making sure the selected card doesn't exist in temporary
    // selected cards or previous resolved cards
    if (
      selectedCard === null ||
      selectedCards.includes(selectedCard) ||
      totalSelectedCards.includes(selectedCard)
    )
      return;

    if (selectedCards.length < 2) {
      selectedCard.classList.add("flip");
      selectedCards = [...selectedCards, selectedCard];

      if (selectedCards.length === 2) {
        isClickDisabled = true;

        // Using setTimeout to delay the animation if the card flip when
        // cards don't match
        setTimeout(() => {
          if (selectedCards[0].dataset.name !== selectedCards[1].dataset.name) {
            selectedCards[0].classList.remove("flip");
            selectedCards[1].classList.remove("flip");
            nextPoint = nextPoint === 10 ? nextPoint : nextPoint - 2;
          } else {
            score += nextPoint;
            scoreUI.innerText = score;
            nextPoint = 20;
            totalSelectedCards = [...totalSelectedCards, ...selectedCards];

            if (totalSelectedCards.length === generatedCards.length) {
              bestScore = score > bestScore ? score : bestScore;
              bestScoreUI.innerText = bestScore;
              saveScore(bestScore);
              console.log("Awesome! You have done it");
            }
          }

          selectedCards = [];
          isClickDisabled = false;
        }, 600);
      }
    }
  }

  /**
   * Generate cards based on random selection of images.
   * The number of items generated is decided upon difficulty.
   * @returns HTMLElement
   */
  function generateCards() {
    const randImages = pickRandom(images[kind], difficulty.variety);
    const shuffledImages = shuffle([...randImages, ...randImages]);
    const cards = shuffledImages.map((image) => createCard(image));
    return cards;
  }

  /**
   * Create a card UI with the passed image argument.
   * @param {*} img: String
   * @returns HTMLElement
   */
  function createCard(img) {
    const cardContainerUI = document.createElement("div");
    cardContainerUI.classList.add("card-container");
    cardContainerUI.dataset.name = img;

    const cardUI = document.createElement("div");
    cardUI.classList.add("card");

    const frontUI = document.createElement("div");
    frontUI.classList.add("front");

    const backUI = document.createElement("div");
    backUI.classList.add("back");

    const imageUI = document.createElement("img");
    imageUI.setAttribute("src", `images/${kind}/${img}.svg`);
    imageUI.setAttribute("alt", img);

    backUI.append(imageUI); // change back to backUI
    cardUI.append(frontUI, backUI);
    cardContainerUI.append(cardUI);

    return cardContainerUI;
  }

  function saveScore(score) {
    localStorage.setItem("BEST_SCORE", score);
  }

  /**
   * Shuffle function using The Fisher–Yates shuffle algorithm
   * by coolaj86 at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * More on Fisher–Yates algorithm at https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
   *
   * @param {*} array: Array
   * @returns Array
   */
  function shuffle(array) {
    // creating a copy to prevent mutating original array
    array = [...array];
    let currentIndex = array.length;
    let randomIndex;

    // While there are remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap current element with the randomly selected element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function pickRandom(array, numOfItems) {
    if (numOfItems >= array.length) return array;
    return shuffle(array).slice(0, numOfItems);
  }
})();
