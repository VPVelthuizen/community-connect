const registerFormHandler = async (event) => {
  const companyName = document.querySelector("#company-name").value.trim();
  const companyCause = document.querySelector("#company-cause").value.trim();
  const primaryCity = document.querySelector("#primary-city").value.trim();
  const primaryState = document.querySelector("#primary-state").value.trim();
  const companyKey = document.querySelector("#company-key").value.trim();

  // Check if all fields are provided
  if (
    companyName &&
    companyCause &&
    primaryCity &&
    primaryState &&
    companyKey
  ) {
    try {
      // Send a POST request to the server with the signup data
      const response = await fetch("TODO", {
        method: "POST",
        body: JSON.stringify({
          companyName,
          companyCause,
          primaryCity,
          primaryState,
          companyKey,
        }),
        headers: { "Content-Type": "application/json" },
      });

      // Log the response for debugging purposes
      console.log(response);

      // Check if the response is ok
      if (response.ok) {
        document.location.replace("/");
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
