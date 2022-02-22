const clock = document.querySelector("#clock");

// interval
function sayHello(){
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()}`;
}
setInterval(sayHello, 1);
// timeout
//setTimeout(sayHello, 5000);

const date = new Date();
date.getDate();
date.getMonth();
date.getFullYear();
