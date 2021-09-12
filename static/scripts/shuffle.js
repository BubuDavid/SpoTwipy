// Get the songs items
let songCards = document.querySelectorAll(".song__card");
let songsContainer = document.getElementById("songs__container");
let songs = [];
let randomIndexes = [];
let randomSongs = [];
const tweetArea = document.getElementById("tweet-body");
const characterCounter = document.getElementById("character-counter");

// ######################## Execution zone ########################

// Save the `songCards` in a `song` array
for (let index = 0; index < songCards.length; index++) {
	songs.push(songCards[index]);
	songs[index].parentNode.removeChild(songs[index]);
}
// Generate 5 random numbers
for (let i = 0; i < 5; i++) {
	// Store the random numbers
	randomIndexes.push(generateRandomNumber(randomIndexes));
}
// Save these random songs in a random song array
randomIndexes.forEach((index) => {
	randomSongs.push(songs.slice(index, index + 1)[0]);
});

// Removing the songs of the songs array
songs = songs.filter((song, index) => !randomIndexes.includes(index));

generateCards();

// Tweet Area
let tweetBodyStart =
	"Soy un BubuBot hecho con #Python 🐍 y #SpotifyAPI 🎶. A este usuario le gusta:\n";
let tweetBodyEnd =
	"Primera persona en decir todos los artistas bien, Bubu le da un beso/sticker 🤓.";
let songNames = [];
randomSongs.forEach((song) => {
	songNames.push(song.childNodes[3].innerText);
});
let tweetBody = writeTweet(tweetBodyStart, tweetBodyEnd, songNames);
tweetArea.value = tweetBody;
characterCounter.innerText = tweetBody.length + "/280";
checkTweet();
tweetArea.addEventListener("input", checkTweet);

// ################### Helper functions Zone ######################
// Function that generate a random number not included in a given array
function generateRandomNumber(randomArray = []) {
	// Generate a random number between 0 and 49
	let randomNumber = Math.floor(Math.random() * songs.length);
	// If the random number generated is already in the randomArray, it is regenerated
	// Note that if we only want one numbe, just call the function with no array
	while (randomArray.includes(randomNumber)) {
		randomNumber = Math.floor(Math.random() * songs.length);
	}
	// Return the random number
	return randomNumber;
}
// Generate the card function
function generateCard(card, index) {
	songsContainer.appendChild(card);
	card.classList.remove("hidden");
	card.id = index + songs.length;
	card.childNodes[7].addEventListener("click", shuffleIt);
}
// Function to hide a card
function hideCard(card) {
	card.classList.add("hidden");
	card.id = "";
	card.remove();
}
// Generate all the cards on display
function generateCards() {
	randomSongs.forEach((song, index) => {
		generateCard(song, index);
	});
}
// Shuffle function
function shuffleIt() {
	// Grab the needed indexes
	let currentIndex = this.parentNode.id - songs.length;
	let randomIndex = generateRandomNumber();
	// Destroy this card
	hideCard(randomSongs[currentIndex]);
	// Swap the element lists
	[randomSongs[currentIndex], songs[randomIndex]] = [
		songs[randomIndex],
		randomSongs[currentIndex],
	];
	// Re-generate the cards with the new one.
	generateCards();
	updateTweet();
}

function writeTweet(start, end, songNames) {
	let tweetBody = start;
	for (const song of songNames) {
		tweetBody += `* ${song}\n`;
	}
	tweetBody += end;

	return tweetBody;
}

function checkTweet() {
	const tweetZone = document.getElementsByClassName("tweet__container")[0];
	if (tweetArea.value.length > 280) {
		tweetZone.classList.add("forbidden");
	} else {
		tweetZone.classList.remove("forbidden");
	}
	tweetBody = tweetArea.value;
	characterCounter.innerText = tweetBody.length + "/280";
}

function updateTweet() {
	let songNames = [];
	randomSongs.forEach((song) => {
		songNames.push(song.childNodes[3].innerText);
	});
	let tweetBody = writeTweet(tweetBodyStart, tweetBodyEnd, songNames);
	tweetArea.value = tweetBody;
	checkTweet();
}
