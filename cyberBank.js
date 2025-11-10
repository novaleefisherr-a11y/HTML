
var presCredentials = [
  {
    username: "ahacker",
    password: "password123"
  }
]

var goalCredentials = [
  {
    username:"hjenson",
    password: "password1"
  }
]

function getUserInfo() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  for (var i=0; i < presCredentials.length; i++) {
    if (username.toLowerCase() == presCredentials[i].username && password == presCredentials[i].password) {
      location.replace("./presLoginPage.html")
      return
    }

    if (username.toLowerCase() == goalCredentials[i].username && password == goalCredentials[i].password) {
      location.replace("./goalLoginPage.html")
      return
    }

  }
  alert("Incorrect username or password");
}

function goBack() {
  location.replace("./cyberBank.html")
}