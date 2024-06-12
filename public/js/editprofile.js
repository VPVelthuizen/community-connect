// Handle form submission for updating user profile
document.getElementById("editProfileForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("edit-email").value.trim();
  const phone = document.getElementById("edit-phone").value.trim();
  const currentPassword = document.getElementById("current-password").value.trim();
  const newPassword = document.getElementById("new-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (newPassword !== confirmPassword) {
      alert("New passwords do not match! Please try again.");
      return;
  }

  try {
      const requestBody = {};

      if (email) {
          requestBody.email = email;
      }

      if (phone) {
          requestBody.phone = phone;
      }
      if (newPassword) {
      requestBody.currentPassword = currentPassword;
      requestBody.newPassword = newPassword;
      }
      console.log(requestBody)
if (email || phone || newPassword) {
      const response = await fetch("/api/users/", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
      });

      if (response.ok) {
          alert("Profile updated successfully!");
          window.location.replace('/profile');
      } else {
          const data = await response.json();
          alert(data.message || "Failed to update profile. Please try again.");
      }
    }
  } catch (error) {
      console.error("Error during profile update:", error);
      alert("An error occurred. Please try again later.");
  }
});
