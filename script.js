const button = document.getElementsByClassName('cell');
const urls = ["https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Spaceship%20Color.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Camping.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/California.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Gamer.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Glases.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/MindMario.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Neon%20Blue.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Spaceship%20Color.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Camping.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Black%20Cat%20White%20Cat.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/California.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Cookie.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Alien.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Gamer.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Glases.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/MindMario.png?raw=true", "https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Neon%20Blue.png?raw=true"];
const compare = [];
const div = document.getElementsByClassName('board');



for (let i = 0; i < 20; i++) {
	const button = document.createElement('button');
	const img = document.createElement('img');

	button.setAttribute('class', 'cell');
	img.setAttribute('class', 'imagem');
	img.setAttribute('src', 'https://github.com/mindera-school/minders/blob/master/src/assets/Minders/Slime.png?raw=true');
	img.setAttribute('alt', 'Slime Minder');

}

for (let i = 0; i < urls.length; i++) {
	button[i].addEventListener("click", () => {
		for (let k = 0; k < 2; k++) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[urls[i], urls[randomIndex]] = [urls[randomIndex], urls[i]];
		}

		for (let j = 0; j < button.length; j++) {
			button[j].childNodes[0].src = urls[j];
		}
	})
}

