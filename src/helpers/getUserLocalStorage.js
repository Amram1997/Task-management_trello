function getUserLocalStorage() {
  let user = localStorage.getItem("trelloUser");
  let parseUser = JSON.parse(user);
  return parseUser.name;
}

export default getUserLocalStorage;
