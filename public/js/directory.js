document.addEventListener('DOMContentLoaded', () => {
    const companyRows = document.querySelectorAll('.company-row');

    companyRows.forEach(row => {
        row.addEventListener('click', () => {
            const companyId = row.getAttribute('data-id');
            window.location.href = `/company/${companyId}`;
        });
    });
});