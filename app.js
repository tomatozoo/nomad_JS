const title = document.querySelector(".title h1");

function handleTitleClick(){
    console.log("Title was clicked!");
}

title.style.color = "blue";
title.addEventListener("click", handleTitleClick);

console.log(title);