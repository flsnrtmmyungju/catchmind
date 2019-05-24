const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = nickname => {
  //socket.io연결 window.으로 어디서나 소켓불러올수있게..
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, { nickname });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  // input.value 와 같은거.;
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
