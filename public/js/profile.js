document.querySelector("#leave-company").addEventListener("click", async function () {
  const confirmation = confirm("Are you sure you want to leave the company?");
  if (!confirmation) {
    return;
  }

  try {
    const response = await fetch("/api/users/TODO", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("You have successfully left the company.");
      window.location.href = "login.html"; // Redirect to login page or another relevant page after leaving the company
    } else {
      const data = await response.json();
      alert(data.message || "Failed to leave the company. Please try again.");
    }
  } catch (error) {
    console.error("Error during company leave:", error);
    alert("An error occurred. Please try again later.");
  }
});
