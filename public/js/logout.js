const logoutHandler = async () => {
  try {
    // Send a request to the server to log out the user
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    // Check if the response is OK
    if (response.ok) {
      // Redirect the user to the login page or homepage
      document.location.replace("/login");
    } else {
      alert("Failed to log out. Please try again!");
    }
  } catch (error) {
    alert("An error occurred during logout. Please try again later.");
  }
};

// Add event listener to the logout button
const logoutButton = document.querySelector("#logout-link");
logoutButton.addEventListener("click", logoutHandler);
const logoutButton2 = document.querySelector("#logout-link-sidenav");
logoutButton2.addEventListener("click", logoutHandler);
