const logoutHandler = async () => {
  try {
    // Send a request to the server to log out the user
    const response = await fetch("TODO", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    // Check if the response is OK
    if (response.ok) {
      // Redirect the user to the login page or homepage
      document.location.replace("TODO");
    } else {
      alert("Failed to log out. Please try again!");
    }
  } catch (error) {
    alert("An error occurred during logout. Please try again later.");
  }
};

// Add event listener to the logout button
const logoutButton = document.querySelector("#logout-button");
logoutButton.addEventListener("click", logoutHandler);
