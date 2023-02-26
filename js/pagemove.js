const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login");

function noname(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem("username", username);
	location.replace("main.html");
}

function yesname() {
	location.replace("main.html");
	stop;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	loginForm.addEventListener("submit", noname);
} else {
	yesname();
}
