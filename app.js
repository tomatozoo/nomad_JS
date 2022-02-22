const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    const username = loginInput.value;
    if (username == ""){
        alert("No input value");
    }
    else if (username.length > 15){
        alert("Your name is too long")
    }
    else {
        console.log("click!");
        alert("hi "+username);
    }
}
loginButton.addEventListener("click",onLoginBtnClick);