const h1 = document.querySelector(".title h1");

function handleTitleClick(){
    h1.style.color = "blue";
    console.log("Title was clicked!");
}

function handleMouseEnter(){
    h1.style.color = "black";
    console.log("mouse was entered!");
}
function handleMouseLeave(){
    h1.style.color = "red";
    h1.innerText = "Mouse is gone";
}
function handleWindowResize(){
    // body가 중요한 부분이다. 
    document.body.style.backgroundColor="tomato";
}
h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// window는 기본으로 제공되는 것임
// resize 이벤트를 listening 하고 있음
window.addEventListener("resize", handleWindowResize);
function handleWindowCopy(){
    // body가 중요한 부분이다. 
    alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline(){
    // body가 중요한 부분이다. 
    alert("SOS no wifi!");
}
function handleWindowOnline(){
    // body가 중요한 부분이다. 
    alert("every thing is fine!");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


console.log(title);