function verify() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user === "h" && pass === "1") {
      window.location.href = "index.html?data=";
    } else {
      window.location.href = "logout_page.html?data=";
  }
}
