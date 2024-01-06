function toggle() {
    var loginElement = document.querySelector('.login');
    var signinElement = document.querySelector('.signin');
    loginElement.classList.add('hidden');
    signinElement.classList.remove('hidden');
}

function toggle1() {
    var loginElement = document.querySelector('.login');
    var signinElement = document.querySelector('.signin');
    loginElement.classList.remove('hidden');
    signinElement.classList.add('hidden');
}

function checkPasswords() {
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirm_password").value;
    var username = document.getElementById("username").value;
    if (password1 !== password2) {
        alert("Passwords do not match. Please enter matching passwords.");
        return false; 
    }
    alert("Account created for "+username)
    return true;
}