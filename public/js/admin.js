const signupFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get and trim input values
  const email = document.querySelector("#email-admin").value.trim();
  const username = document.querySelector("#username-admin").value.trim();
  const password = document.querySelector("#password-admin").value.trim();
  const company_key = document.querySelector("#company-admin").value.trim();
  const is_admin = true;

  // Check if all required fields are provided
  if (email && username && password && company_key) {
    try {
      // Send a POST request to the server with the signup data
      const response = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({ email, username, password, is_admin, company_key }),
        headers: { "Content-Type": "application/json" },
      });

      // Log the response for debugging purposes
      console.log(response);
      if (response.ok) {
        const data = await response.json()
        // Check if the response is OK
        if (data) {
          document.location.replace("/profile");
        }
      }
      else {
        const data = await response.json();
        alert(data.message || "Failed to sign up. Please try again!"); // error message
      }
    } catch (error) {
      alert("An error occurred during signup. Please try again later."); // Show a general error alert
    }
  }
};

// Select the signup form and add a submit event listener
const adminForm = document.querySelector("#admin-form");
adminForm.addEventListener("submit", signupFormHandler);