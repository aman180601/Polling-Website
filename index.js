firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("Welcome.html")
    }

});

function login() {
    email = document.getElementById('loginEmail').value;
    password = document.getElementById('loginPassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}


function signup() {
    var username = document.getElementById('signupUsername');
    var email = document.getElementById('signupEmail');
    var password = document.getElementById('signupPassword');
    var confirm_password = document.getElementById('signupConfirmPassword');
    if (username.value) {
        if (username.value.length > 0 && username.value.length < 8) {
            username.classList.add("form__input--error");
            username.parentElement.querySelector(".form__input-error-message").textContent = "Username must be of minimum 8 characters";
        } else {
            username.classList.remove("form__input--error");
            username.parentElement.querySelector(".form__input-error-message").textContent = "";
        }
    }
    if (email.value) {
        if (email.value.length > 0 && !email.value.match(/^[^@]+@\w+(\.\w+)+\w$/)) {
            email.classList.add("form__input--error");
            email.parentElement.querySelector(".form__input-error-message").textContent = "Email not valid";
        } else {
            email.classList.remove("form__input--error");
            email.parentElement.querySelector(".form__input-error-message").textContent = "";
        }
    }
    if (password.value) {
        if (password.value.length > 0 && password.value.length < 8) {
            password.classList.add("form__input--error");
            password.parentElement.querySelector(".form__input-error-message").textContent = "Password must be of minimum 8 characters";
        } else {
            password.classList.remove("form__input--error");
            password.parentElement.querySelector(".form__input-error-message").textContent = "";
        }
    }
    if (confirm_password.value) {
        if (confirm_password.value != password.value) {
            confirm_password.classList.add("form__input--error");
            confirm_password.parentElement.querySelector(".form__input-error-message").textContent = "Password mismatched";
        } else {
            confirm_password.classList.remove("form__input--error");
            confirm_password.parentElement.querySelector(".form__input-error-message").textContent = "";
        }
    }

    if (username.value.length >= 8 && email.value.match(/^[^@]+@\w+(\.\w+)+\w$/) && password.value.length >= 8 && confirm_password.value == password.value) {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    }
}





document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createaccount");

    document.querySelector("#linkcreateaccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
    });

});