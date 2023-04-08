const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form #btn");
const h1 = document.querySelector("h1");
const changeBtn = document.querySelector("button");


function onLoginSubmit(e) {
    e.preventDefault();
    const value = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", value);
    paintGreeting(value);
}
function paintGreeting(name){
    h1.classList.remove("hidden");
    changeBtn.classList.remove("hidden");
    h1.innerText = `Hello ${name}`;
}
function changeBtnClick(e){
    e.preventDefault();
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
    h1.classList.add("hidden");
    changeBtn.classList.add("hidden");
    //window.location.reload();
}

changeBtn.addEventListener("click",changeBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);
if(localStorage.getItem("username") !== null){
   paintGreeting(localStorage.getItem("username"));
}
else{
    changeBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}