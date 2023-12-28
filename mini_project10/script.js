function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();

    // Update time elements in the DOM
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update date elements in the DOM
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('date').textContent = date;
    document.getElementById('year').textContent = year;
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

startClock();
