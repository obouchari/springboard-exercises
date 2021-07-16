const apiKey = "oISr3pZYMzV2Iyh6O9TrgjuR0guzDLi1";

// This is used to track number of columns allowed in one row
const cols = 5;
let colsLeft = cols;

const form = document.querySelector("form");
const cards = document.querySelector("#cards");

form.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  // Get the text from the input
  const searchInput = this.querySelector("input");

  // call buildRequestURL with text as an argument
  const url = buildRequestURL(searchInput.value);

  // update the UI to indicate the start of a background process
  const searchBtn = this.querySelector("#search-btn");
  const searchBtnText = searchBtn.innerHTML;
  const loadingIndicator = createLoadingIndicator();
  searchBtn.replaceChildren(...loadingIndicator);

  try {
    // Send a request to the Giphy API
    const results = await axios.get(url);

    // If success, grab the image prop from the data
    if (results.status === 200) {
      const {
        images: { original: img },
        username,
      } = results.data.data[0];

      // create an img element and embed the img url
      const card = createCard(img, username);

      // add img to the DOM
      let row = cards.querySelector(".row");

      if (!row || colsLeft === 0) {
        colsLeft = cols;
        row = document.createElement("div");
        row.classList.add("row", `row-cols-${cols}`);
      }

      const col = document.createElement("div");
      col.classList.add("col");
      col.appendChild(card);
      row.prepend(col);
      cards.prepend(row);
      colsLeft--;
    }
  } catch (error) {
    console.log(error);
  } finally {
    searchInput.value = "";
    searchBtn.innerHTML = searchBtnText;
  }
});

const deleteAllBtn = form.querySelector("#delete-btn");
deleteAllBtn.addEventListener("click", function (evt) {
  cards.innerHTML = "";
});

function buildRequestURL(
  q = "",
  queryParams = {
    api_key: apiKey,
    limit: 1,
    rating: "pg",
    lang: "en",
    q,
  }
) {
  const url = "http://api.giphy.com/v1/gifs/search";
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join("&");
  return `${url}?${queryString}`;
}

function createLoadingIndicator() {
  const spinner = document.createElement("span");
  spinner.classList.add("spinner-border", "spinner-border-sm");
  spinner.setAttribute("role", "status");
  spinner.setAttribute("aria-hidden", "true");
  return [spinner, " Loading..."];
}

function createCard(img, username) {
  const card = document.createElement("div");
  // card.style.width = `${img.width}px`;
  card.classList.add("card");

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", img.url);
  imgEl.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardText = document.createElement("p");
  cardText.classList.add("card-text", "text-secondary");
  cardText.innerText = `By ${username}`;

  cardBody.appendChild(cardText);

  card.appendChild(imgEl);
  card.appendChild(cardBody);

  return card;
}
