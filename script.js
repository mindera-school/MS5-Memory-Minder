let container = document.getElementsByClassName('board');
let carddeck = document.getElementById('carddeck');
let button = document.getElementsByTagName('button');
const urls = ["https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Spaceship%20Color.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Camping.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/California.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Gamer.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Glases.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/MindMario.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Neon%20Blue.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Spaceship%20Color.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Camping.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/California.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Gamer.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Glases.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/MindMario.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Neon%20Blue.png?raw=true"];
const compare = [];
const div = document.getElementsByClassName('board');
const buttonlist = [];
let cardclick;
let carigual;

function randomImages() {
	for (let i = 0; i < urls.length; i++) {
		for (let k = 0; k < 2; k++) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[urls[i], urls[randomIndex]] = [urls[randomIndex], urls[i]];
		}
	}

}

for (let i = 0; i < 20; i++) {
	const button = document.createElement("button");
	const image = document.createElement('img');
	button.setAttribute("image-index", i)
	button.setAttribute("class", "cell");
	buttonlist.push(button);
	carddeck.appendChild(button);
	image.src = "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Slime.png?raw=true";
	button.appendChild(image);
}
randomImages()

for (let i = 0; i < urls.length; i++) {
	let button = buttonlist[i]
	button.addEventListener("click", () => {

		let index = button.getAttribute("image-index")
		button.childNodes[0].src = urls[index];
		setTimeout(() => {
			button.childNodes[0].src = "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Slime.png?raw=true";
		}, 5000);

	})
}
