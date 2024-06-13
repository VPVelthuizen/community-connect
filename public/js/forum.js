// Function to add post
async function addPost(event) {
  event.preventDefault();
  const postTitle = document.getElementById("post-title").value.trim();
  const postBody = document.getElementById("post-body").value.trim();

  if (postBody === "") {
    alert("Post can't be empty!");
    return;
  }

  if (postTitle === "") {
    alert("Give your post a title!");
    return;
  }

  try {
    // Send a POST request to the server with the post data
    const response = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        forum_id,
        user_id: rec.sesion.user_id,
      }),
      headers: { "Content-Type:": "application/json" },
    });

    // Log the response for debugging purposes
    console.log(response);

    // Check if the response is ok
    if (response.ok) {
      const data = await response.json();
      if (data) {
        // If the response indicates success, redirect to the posts page
        document.location.replace("/posts");
      } else {
        alert(data.message || "Failed to create post. Please try again!"); // Error message
      }
    } else {
      const data = await response.json();
      alert(data.message || "Failed to create post. Please try again!"); // Error message
    }
  } catch (error) {
    console.error("Error during post creation:", error);
    alert("An error occurred during post creation. Please try again!"); // General error alert
  }
}

// Add event listener to the form
const addPostForm = document.querySelector("#addPostForm");
addPostForm.addEventListener("submit", addPost);
