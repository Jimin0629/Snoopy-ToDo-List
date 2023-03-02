const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	loginForm.addEventListener("submit", noname);
} else {
	yesname(savedUsername);
}

function noname(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem("username", username);
	yesname(username);
}

function yesname(username) {
	location.replace("main.html");
}
