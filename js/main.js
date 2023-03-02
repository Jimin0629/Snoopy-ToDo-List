const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	location.replace("index.html");
}
const greeting = document.querySelector(".greeting");

greeting.innerText = "Hello " + savedUsername + "!";
