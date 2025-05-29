
async function loadAvailability() {
    const response = await fetch('data/availability.json');
    const data = await response.json();
    const select = document.getElementById('weekend-select');
    data.available_weekends.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.text = new Date(date).toDateString();
        select.appendChild(option);
    });
}

function submitBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const weekend = document.getElementById('weekend-select').value;
    const packageSize = document.getElementById('package-select').value;
    const booking = { name, email, weekend, packageSize };
    fetch('https://your-backend-webhook-url.com', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(booking)
    }).then(() => {
        window.location.href = 'success.html';
    });
}

document.addEventListener('DOMContentLoaded', loadAvailability);
