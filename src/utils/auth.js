export const loginUser = (email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
};

export const signupUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem("isLoggedIn", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};