const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

// Get quote from API
async function getQuotes() {
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(proxyUrl + apiUrl);
		apiQuotes = await response.json();

		// if unknown author, print unknown
		if (data.quoteAuthor === "") {
			authorText.innerText = "Unknown";
		} else {
			authorText.innerText = data.quoteAuthor;
		}

		// if quote length is greater then 120 charaters, then make font smaller
		if (data.quoteText.length > 120) {
			quoteText.classList.add('long-quote');
		}  else {
			quoteText.classList.remove('long-quote');
		}
		quoteText.innerText = data.quoteText;
	} catch (error) {
		getQuotes();

	}
}
function tweetQuote() {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

getQuotes();
