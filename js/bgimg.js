const images = [
	"0.png",
	"1.png",
	"2.png",
	"3.jpg",
	"4.png",
	"5.png",
	"6.png",
	"7.png",
];

const choseenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseenImage}`;

bgImage.id = "bgimg";

document.body.appendChild(bgImage);
