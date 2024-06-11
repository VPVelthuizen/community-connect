const registerFormHandler = async (event) => {
  const name = document.querySelector("#company-name").value.trim();
  const cause = document.querySelector("#company-cause").value.trim();
  const city = document.querySelector("#primary-city").value.trim();
  const state = document.querySelector("#primary-state").value.trim();

  // Check if all fields are provided
  if (
    name && cause && city && state
  ) {
    try {
      // Send a POST request to the server with the signup data
      const response = await fetch("/api/companies/", {
        method: "POST",
        body: JSON.stringify({
          name, 
          cause, 
          city, 
          state
        }),
        headers: { "Content-Type": "application/json" },
      });

      // Log the response for debugging purposes
      console.log(response);

      // Check if the response is ok
      if (response.ok) {
        document.location.replace("/admin");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to sign up.  Please try again!"); //error message
      }
    } catch (error) {
      alert("An error occurred during signup.  Please try again!"); // General error alert
    }
  }
};

// Select the register form and add a submit event listener
const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", registerFormHandler);
