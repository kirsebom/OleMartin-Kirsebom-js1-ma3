const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
	const response = await fetch(url);

	const json = await response.json();

	console.log(json);

	const results = json.results;

	resultsContainer.innerHTML = "";

	for (let i = 0; i < results.length; i++) {
		if (i === 8) {
			break;
		}

		resultsContainer.innerHTML += `<div class="result">Name: ${results[i].name}, Rating: ${results[i].rating}, Amount of tags: ${results[i].tags.length}</div>`;
	}
}

getGames();
