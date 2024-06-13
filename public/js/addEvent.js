const eventFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#event-name").value.trim();
    const date = document.querySelector("#event-date").value.trim();
    const time = document.querySelector("#event-time").value.trim();
    const city = document.querySelector("#event-city").value.trim();
    const state = document.querySelector("#event-state").value.trim();
    const desc = document.querySelector("#event-desc").value.trim();
  
    // Check if all fields are provided
    if (name && date && time && city && state && desc) {
      try {
        // Send a POST request to the server with the signup data
        const response = await fetch("/api/events/", {
          method: "POST",
          body: JSON.stringify({
            name,
            date,
            time, 
            city,
            state,
            description: desc,
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
            document.location.replace("/events");
          } else {
            alert(data.message || "Failed to create event. Please try again!"); // Error message
          }
        } else {
          const data = await response.json();
          alert(data.message || "Failed to create Event. Please try again!"); // Error message
        }
      } catch (error) {
        alert("An error occurred during event creation. Please try again!"); // General error alert
      }
    } else {
      alert("Please fill in all fields before submitting."); // Alert if not all fields are filled
    }
  };

  const addEventForm = document.querySelector("#addEventForm");
  addEventForm.addEventListener("submit", eventFormHandler);
  