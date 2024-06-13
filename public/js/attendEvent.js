const attendButton = document.querySelector('#attend-event')
attendButton.addEventListener('click', async (event) => {
    try {
        const event_id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/userEvents/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ event_id })
        });

        if (response.ok) {
            data = await response.json()
            if (data) {
                location.reload();
            }
        } else {
            console.error('Failed to add user to event')
        }
    } catch (error) {
        console.error('Error adding user to event:', error);
    }
})
