export function getUser() {
  const login = window.localStorage.getItem("login");
  return JSON.parse(login);
}

export function setUser(login) {
  return window.localStorage.setItem("login", JSON.stringify(login));
}
