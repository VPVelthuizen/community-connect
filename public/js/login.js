const loginFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.querySelector("#username-login").value.trim(); // Get and trim the username input value
  const password = document.querySelector("#password-login").value.trim(); // Get and trim the password input value

  // Check if both username and password are provided
  if (username && password) {
    try {
      // Send a POST request to the server with username and password
      const response = await fetch('/api/users/login', {
        // Replace "/login" with the actual endpoint
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }, // Set the content type to JSON
      });

      // Log the response for debugging purposes
      console.log(response);

      // Check if the response is OK
      if (response.ok) {
        const data = response.json()
        console.log(data)
        if (data) {
          alert("Succesfully Logged In!");
          document.location.replace("/");
        }
      } else {
        alert("Incorrect username or password. Please try again!"); // Show an error alert if login failed
      }
    } catch (error) {
      alert("An error occurred.  Please try again later!")
    }
  };
}

// Select the login form and add a submit event listener
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginFormHandler);
