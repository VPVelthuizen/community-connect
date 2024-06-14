document.addEventListener('DOMContentLoaded', () => {
    const forumRows = document.querySelectorAll('.forum-row');

    forumRows.forEach(row => {
        row.addEventListener('click', () => {
            const forumId = row.getAttribute('data-id');
            window.location.href = `/forums/${forumId}`;
        });
    });
});