let apiQuotes = [];

//  Get Quotes From API
async function getQuotes() {
		const apiURL = 'https://type.fit/api/quotes';
		try {
				const response = await fetch(apiURL);
				apiQuotes = await response.json();
				console.log(apiQuotes);
		} catch (error) {
			// Catch Error Here
		}
}

// On Load
getQuotes();