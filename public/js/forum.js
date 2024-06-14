// Function to add post
async function addPost(event) {
  event.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const body = document.getElementById("post-body").value.trim();

  if (!body) {
    alert("Post can't be empty!");
    return;
  }

  if (!title) {
    alert("Give your post a title!");
    return;
  }

  try {

    const addPostForm = document.querySelector("#addPostForm");
    const forumId = addPostForm.dataset.forumId;
    // Send a POST request to the server with the post data
    const response = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        forum_id: forumId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // Log the response for debugging purposes
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      if (data) {
        document.location.replace(`/forums/${data.forum_id}`);
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
