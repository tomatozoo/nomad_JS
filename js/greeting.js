const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // hide form
    event.preventDefault();   
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // show greeting
    console.log(username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

function handleLinkClick(event){
    event.preventDefault();   
    console.log(event);
    alert("clicked");
}
    
function paintGreetings(HIDDEN_CLASSNAME,savedUsername){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`Hello ${savedUsername}`;
}
// 엔터를 누르거나 버튼 클릭할 때 발생
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null){
    // show the form
    console.log("user is null");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    console.log("user is not null");
    // show the greeting
    paintGreetings(HIDDEN_CLASSNAME,savedUsername);
}

link.addEventListener("click", handleLinkClick);