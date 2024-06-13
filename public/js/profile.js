document
  .querySelector("#delete-profile")
  .addEventListener("click", async function () {
    const confirmation = confirm(
      "We hate to see you go!  Are you sure you want to delete your profile?"
    );
    if (!confirmation) {
      return;
    }

    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert(
          "You have successfully deleted your profile.  We hope you'll join us again soon!"
        );
        document.location.replace("/login");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to delete. Please try again!");
      }
    } catch (error) {
      console.error("Error during company leave:", error);
      alert("An error occurred. Please try again later.");
    }
  });
