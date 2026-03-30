export const getDashboardData = async () => {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.json();

  return data.slice(0, 5);
};