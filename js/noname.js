const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
	location.replace("index.html");
}
