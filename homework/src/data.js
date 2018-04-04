const FetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts/").then(response => response.json());
  
export default FetchData