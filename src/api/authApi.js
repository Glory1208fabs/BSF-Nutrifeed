export const loginUser = async (email, password) => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};



export const signupUser = async (userData) => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();

  return data;
};