const signUpName = document.getElementById("signUpName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const signupBtn = document.getElementById("signupBtn");
const userData = JSON.parse(localStorage.getItem("userData"));
const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const welcomeMessage = document.getElementById("welcomeMessage");


const currentUser = JSON.parse(localStorage.getItem("currentUser"));


// ------------------------------------Sign up Page Code-----------------------------------------
function addUser() {
    if (signUpEmail.value == "" || signUpPassword.value == "" || signUpName.value == "") {
        alert("Please enter valid values")
    }else if(!emailRegex.test(signUpEmail.value)){
        alert("Please enter valid email address")
    }
    else {
        user = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        };
        userData.push(user);
        localStorage.setItem("userData", JSON.stringify(userData));
        clearInputData();
        open("../index.html","_self")
    }
}
function clearInputData() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}

//   ---------------------------------- Login --------------------------------
function loginUser() {
    const enteredEmail = loginEmail.value;
    const enteredPassword = loginPassword.value;

    if (enteredEmail === "" || enteredPassword === "") {
        alert("Please enter both email and password");
    } else {
        const user = userData.find(u => u.email === enteredEmail && u.password === enteredPassword);

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));

            open('pages/home.html',"_self");

        } else {
            alert("Invalid email or password. Please try again.");
        }
    }
}
// -------------------------------------- home --------------------------------

// Display the username on the home page
if (currentUser) {
    welcomeMessage.innerHTML=`Welcome, ${currentUser.name}!`;
}
