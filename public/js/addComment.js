const addComment = async (event) => {
    event.preventDefault();
    const commentBody = document.querySelector("#comment-body").value.trim();
    const dateCreated = document.querySelector("#date-created").value;
    const postId = document.querySelector("#post-id").value;

    // Check if all fields are provided
    if (commentBody && dateCreated && postId) {
        try {
            // Send a POST request to the server with the data including the post ID
            const response = await fetch("/api/commentRoutes/", {
                method: "POST",
                body: JSON.stringify({
                    commentBody,
                    postId // Include the post ID in the request body
                }),
                headers: { "Content-Type": "application/json" },
            });
  
        // Log the response for debugging purposes
        console.log(response);
  
        // Check if the response is ok
        if (response.ok) {
          const data = await response.json();
          if (data) {
            // If the response indicates success, redirect
            document.location.replace("/comment");
          } else {
            alert(data.message || "Failed to add comment. Please try again!"); // Error message
          }
        } else {
          const data = await response.json();
          alert(data.message || "Failed to add comment. Please try again!"); // Error message
        }
      } catch (error) {
        alert("An error occurred during comment creation. Please try again!"); // General error alert
      }
    } else {
      alert("Please fill in all fields before submitting."); // Alert if not all fields are filled
    }
  };

  const newComment = document.querySelector("#newComment");
  newComment.addEventListener("submit", addComment);
  