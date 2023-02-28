const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit", noname);
} else {
	yesname(savedUsername);
}

function noname(event) {
	event.preventDefault();
	loginForm.classList.add("hidden");
	const username = loginInput.value;
	localStorage.setItem("username", username);
	yesname(username);
}

function yesname(username) {
	greeting.classList.remove("hidden");
	loginForm.classList.add("hidden");
	greeting.innerText = `Hello ${username}`;
}
