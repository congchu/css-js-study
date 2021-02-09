const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUSer";
        SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    even.preventDefault();
    const currnetValue = input.value;
    console.log(currnetValue);
    paintGreeting(currnetValue);
    saveName(currnetValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING)
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function inti(){
    loadName();


}
init();