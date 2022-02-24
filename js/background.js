// 랜덤한 숫자를 받아서
// html 바디에 보내주고 싶어한다. 
const images = ["0.jpg","1.jpg","2.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

