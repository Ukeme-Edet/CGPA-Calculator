function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form__message--success", ".form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove(".form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform all AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password!");
    });
    
    document.querySelectorAll(".form__input").forEach(inputElement => {
        password = document.getElementById("signuppassword")
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupconfirmpassword" &&  e.target.value != password.value) {
                setInputError(inputElement, "Password did not match");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })
    });

    var pass = document.getElementById("signuppassword");
    var msg = document.getElementById("message");
    var str = document.getElementById("strength");

    pass.addEventListener("input", () => {
        if(pass.value.length > 0){
            msg.style.display = "block";
        }
        else{
            msg.style.display = "none";
        }
        if(pass.value.length < 4){
            str.innerHTML = "weak";
            pass.style.borderColor = "#cc3333";
            msg.style.color = "#cc3333";
        }
        else if(pass.value.length >= 4 && pass.value.length < 8){
            str.innerHTML = "medium";
            pass.style.borderColor = "#252c6a";
            msg.style.color = "#252c6a";
        }
        else if(pass.value.length >= 8){
            str.innerHTML = "strong";
            pass.style.borderColor = "#0052FC";
            msg.style.color = "#0052FC";
        }
    });
});


