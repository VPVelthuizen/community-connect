const createForum = async (event) => {
    event.preventDefault();
    const forumTitle = document.querySelector("#forum-title").value.trim();
    const forumDescription = document.querySelector("#forum-description").value.trim();

    // Check if all fields are provided
    if (forumTitle && forumDescription) {
      try {
        // Send a POST request to the server with the data
        const response = await fetch("/api/forum/", {
          method: "POST",
          body: JSON.stringify({
            forumTitle,
          }),
          headers: { "Content-Type": "application/json" },
        });
  
        // Log the response for debugging purposes
        console.log(response);
  
        // Check if the response is ok
        if (response.ok) {
          const data = await response.json();
          if (data) {
            // If the response indicates success, redirect to the admin page
            document.location.replace("/forum");
          } else {
            alert(data.message || "Failed to create forum. Please try again!"); // Error message
          }
        } else {
          const data = await response.json();
          alert(data.message || "Failed to create forum. Please try again!"); // Error message
        }
      } catch (error) {
        alert("An error occurred during forum creation. Please try again!"); // General error alert
      }
    } else {
      alert("Please fill in all fields before submitting."); // Alert if not all fields are filled
    }
  };

  const newForum = document.querySelector("#newForum");
  newForum.addEventListener("submit", createForum);
  