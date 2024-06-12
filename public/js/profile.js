$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".modal").modal();

  $("#changePasswordForm").on("submit", async function (event) {
    event.preventDefault();

    const currentPassword = $("#current-password").val().trim();
    const newPassword = $("#new-password").val().trim();
    const confirmPassword = $("#confirm-password").val().trim();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match! Please try again.");
      return;
    }

    try {
      const response = await fetch("/api/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        alert("Password changed successfully!");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to change password. Please try again.");
      }
    } catch (error) {
      console.error("Error during password change:", error);
      alert("An error occurred. Please try again later.");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  });
});
