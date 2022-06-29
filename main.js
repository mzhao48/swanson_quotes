const numBtn = document.querySelector("#num-btn");
const searchBtn = document.querySelector("#search-btn");
const quoteDiv = document.querySelector("#quoteDiv");
const quoteNum = document.querySelector("#quoteNum");
const searchTerm = document.querySelector("#searchTerm");

numBtn.addEventListener("click", grabNum);
searchBtn.addEventListener("click", grabSearch);

async function grabNum() {
  while (quoteDiv.hasChildNodes()) {
    quoteDiv.removeChild(quoteDiv.firstChild);
  }

  try {
    let response = await fetch(
      `https://ron-swanson-quotes.herokuapp.com/v2/quotes/${quoteNum.value}`
    );
    let data = await response.json();

    data.forEach((_, idx) => {
      let newP = document.createElement("p");
      let strongP = document.createElement("strong");
      let newQuote = document.createTextNode(`${idx + 1}) ${data[idx]}`);
      newP.appendChild(strongP);
      strongP.appendChild(newQuote);
      quoteDiv.appendChild(newP);
    });
  } catch (error) {
    console.error(error);
  }

  searchTerm.value = "";
}

async function grabSearch() {
  while (quoteDiv.hasChildNodes()) {
    quoteDiv.removeChild(quoteDiv.firstChild);
  }

  try {
    let response = await fetch(
      `https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${searchTerm.value}`
    );
    let data = await response.json();
    data.forEach((_, idx) => {
      let newP = document.createElement("p");
      let strongP = document.createElement("strong");
      let newQuote = document.createTextNode(`${idx + 1}) ${data[idx]}`);
      newP.appendChild(strongP);
      strongP.appendChild(newQuote);
      quoteDiv.appendChild(newP);
    });
  } catch (error) {
    console.error(error);
  }

  quoteNum.value = "";
}
