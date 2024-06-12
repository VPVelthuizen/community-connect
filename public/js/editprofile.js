$(document).ready(function () {
  // Fetch user data when the page loads
  async function fetchUserData() {
    try {
      const response = await fetch("/api/users/get-profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const user = await response.json();
        $("#edit-email").val(user.email);
        $("#edit-phone").val(user.phone);
        M.updateTextFields(); // Reinitialize Materialize labels
      } else {
        alert("Failed to fetch user data. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  // Call the function to fetch user data
  fetchUserData();

  // Handle form submission for updating user profile
  $("#editProfileForm").on("submit", async function (event) {
    event.preventDefault();

    const email = $("#edit-email").val().trim();
    const phone = $("#edit-phone").val().trim();
    const currentPassword = $("#current-password").val().trim();
    const newPassword = $("#new-password").val().trim();
    const confirmPassword = $("#confirm-password").val().trim();

    if (newPassword && newPassword !== confirmPassword) {
      alert("New passwords do not match! Please try again.");
      return;
    }

    try {
      const response = await fetch("/api/users/edit-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
        window.location.href = "profile.html"; // Redirect to profile page after update
      } else {
        const data = await response.json();
        alert(data.message || "Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      alert("An error occurred. Please try again later.");
    }
  });
});
