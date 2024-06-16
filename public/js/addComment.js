const addComment = async (event) => {
  event.preventDefault();
  const commentBody = document.querySelector("#comment-body").value;
  const commentForm = document.querySelector("#addCommentForm")
  const postId = commentForm.dataset.postId;

  // Check if all fields are provided
  if (commentBody && postId) {
    try {
      // Send a POST request to the server with the data including the post ID
      const response = await fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({
          body: commentBody,
          post_id: postId,
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
          document.location.replace(`/posts/${postId}`);
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

const addCommentForm = document.querySelector("#addCommentForm");
addCommentForm.addEventListener("submit", addComment);
