const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//Show New Quote
function newQuote(){

	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	// Check if Author field is blank and replace it with 'unknown'
	if (!quote.author) {
		authorText.textContent = 'unknown';
	} else {
		authorText.textContent = quote.author;
	}

	// Check Quote length to determine styling
	if (quote.text.length > 100)  {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	quoteText.textContent = quote.text;

	quoteText.textContent = quote.text;
}


//  Get Quotes From API
async function getQuotes() {
		const apiURL = 'https://type.fit/api/quotes';
		try {
				const response = await fetch(apiURL);
				apiQuotes = await response.json();
			  newQuote();
		} catch (error) {
			// Catch Error Here
		}
}

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent
		} - ${authorText.textContent}`;
		window.open(twitterUrl, '_blank');
}

// Event Listeners
	newQuoteBtn.addEventListener('click', newQuote);
	twitterBtn.addEventListener('click', tweetQuote);
	
	document.getElementById("red-button").addEventListener
	("click", () => {
		document.documentElement.style.setProperty
		('--body-background-color', 'hsla(0, 83%, 73%, 0.40'),
		document.documentElement.style.setProperty 
		('--container-background-color', '#c02b2be3') 
	});
	document.getElementById("green-button").addEventListener
	("click", () => {
		document.documentElement.style.setProperty
		('--body-background-color', '#85ce6f'),
		document.documentElement.style.setProperty 
		('--container-background-color', '#3aaa49') 
	});
	document.getElementById("blue-button").addEventListener
	("click", () => {
		document.documentElement.style.setProperty
		('--body-background-color', '#476de7'),
		document.documentElement.style.setProperty 
		('--container-background-color', '#0000cf');
	});


// On Load
getQuotes();