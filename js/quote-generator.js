// gets the quotes from the local json file and stores it in the quotes variable
let quotes;

fetch('../data/quotes.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Unable to fetch quotes' + response.statusText);
    }
    return response.json()
  })
  .then(data => {
    quotes = data;
    console.log(quotes);
  })

// keeps a list of used quotes to avoid duplicates
let displayedQuotes = [];

function generateQuote() {
  // displays the quote tray once function is called
  document.getElementById("quote-tray").classList.add("show");

  const numberOfQuotes = quotes.length;
  let usedQuote = true;
  let randomNumber;
  // while loop checks if the quote was already used and if not, updates the quote
  while (usedQuote == true) {
    randomNumber = Math.floor(Math.random() * numberOfQuotes);
    if (!displayedQuotes.includes(randomNumber)) {
      usedQuote = false;
      displayedQuotes += randomNumber;
      const quoteObject = quotes[randomNumber];
      const author = quoteObject.author;
      const quote = quoteObject.quote;
      document.getElementById("author").innerText = `-${author}`;
      document.getElementById("quote").innerText = `"${quote}"`;
    } else if (displayedQuotes.length == numberOfQuotes) {
      document.getElementById("author").innerText = "-Me";
      document.getElementById("quote").innerText = `"We seem to have ran out of available quotes."`;
      document.getElementById("quote-btn").classList.add("disabled");
      usedQuote = false;
    }
  }
}

