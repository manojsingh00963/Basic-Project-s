
const endDate = "28 september 2025 12:00 AM";

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input');

const clock = () => {
    const end = new Date(endDate);
    console.log(end);
    const now = new Date();
    console.log(now);
    const diff = (end - now) / 1000;
    console.log(diff);

    // If the countdown is over
    if (diff < 0) return;

    // Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // Convert into hours
    inputs[1].value = Math.floor(diff / 3600 % 24);
    // Convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // Convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
};

clock();

setInterval(() => {
    clock();
}, 1000);
