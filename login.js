document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggle-form").addEventListener("click", function(event) {
        event.preventDefault();
        let formTitle = document.getElementById("form-title");
        let authBtn = document.querySelector(".auth-btn");
        let toggleText = document.querySelector(".toggle-text");
        let nameGroup = document.getElementById("name-group");
        
        if (formTitle.innerText === "Login") {
            formTitle.innerText = "Sign Up";
            authBtn.innerText = "Sign Up";
            toggleText.innerHTML = "Already have an account? <a href='#' id='toggle-form'>Login</a>";
            nameGroup.style.display = "block";
        } else {
            formTitle.innerText = "Login";
            authBtn.innerText = "Login";
            toggleText.innerHTML = "Don't have an account? <a href='#' id='toggle-form'>Sign Up</a>";
            nameGroup.style.display = "none";
        }
    });
    
    document.querySelectorAll(".login-btn").forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    });
});
function redirectToLogin() {
    window.location.href = "login.html";
}