const companySignupFormHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get and trim input values
    const companyName = document.querySelector("#company-name").value.trim();
    const companyEmail = document.querySelector("#company-email").value.trim();
    const companyAddress = document.querySelector("#company-address").value.trim();
    const companyPhone = document.querySelector("#company-phone").value.trim();
    const companyKey = document.querySelector("#company-key").value.trim();
  
    // Check if all required fields are provided
    if (companyName && companyEmail && companyAddress && companyPhone && companyKey) {
      try {
        // Send a POST request to the server with the signup data
        const response = await fetch("/company-signup", { // Replace "/company-signup" with the actual endpoint
          method: "POST",
          body: JSON.stringify({ companyName, companyEmail, companyAddress, companyPhone, companyKey }),
          headers: { "Content-Type": "application/json" },
        });
  
        // Log the response for debugging purposes
        console.log(response);
  
        // Check if the response is OK
        if (response.ok) {
          document.location.replace("/dashboard"); // Replace "/dashboard" with the actual redirect location
        } else {
          const data = await response.json();
          alert(data.message || "Failed to sign up. Please try again!"); // Error message
        }
      } catch (error) {
        console.error("Error during signup:", error); // Log the error
        alert("An error occurred during signup. Please try again later."); // General error alert
      }
    } else {
      alert("Please fill out all fields."); // Alert if any required fields are missing
    }
  };
  
  // Select the signup form and add a submit event listener
  const companySignupForm = document.querySelector("#company-signup-form");
  companySignupForm.addEventListener("submit", companySignupFormHandler);
  