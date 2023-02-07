const create = document.querySelector('.create');
const username = document.querySelector('.name');
const password = document.querySelector('.password');
const login = document.querySelector('.login');

localStorage.setItem("user", "test");
localStorage.setItem("password", "test");


create.addEventListener('click',() => {

    if(username.value != "" && password.value != ""){
        localStorage.setItem("user", username.value);
        localStorage.setItem("password", password.value);
        console.log(localStorage.getItem('user'));
    }
    else{
        alert("Please make sure you filled out bith fields.");
    }
})

login.addEventListener('click',() => {

    if(username.value == localStorage.getItem('user') && 
    password.value == localStorage.getItem("password")){
        window.open("../home.html");
    }
    else{
        alert("Username or password does not match.");
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////

