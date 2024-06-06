const loginFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.querySelector("#username-login").value.trim(); // Get and trim the username input value
  const password = document.querySelector("#password-login").value.trim(); // Get and trim the password input value

  // Check if both username and password are provided
  if (username && password) {
    try {
      // Send a POST request to the server with username and password
      const response = await fetch(TODO, {
        // Replace "/login" with the actual endpoint
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }, // Set the content type to JSON
      });

      // Log the response for debugging purposes
      console.log(response);

      // Check if the response is OK
      if (response.ok) {
        document.location.replace("/dashboard"); // Redirect to the dashboard page
      } else {
        alert("Incorrect username or password. Please try again!"); // Show an error alert if login failed
      }
    } catch (error) {
      console.error("Error during login:", error); // Log any errors that occur during the fetch request
      alert("An error occurred during login. Please try again later."); // Show a general error alert
    }
  } else {
    alert("Please enter both username and password."); // Show an alert if username or password is missing
  }
};

// Select the login form and add a submit event listener
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginFormHandler);
