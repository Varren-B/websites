let countdownTime = 60;
const countdownElement = document.getElementById('countdown');

function updateCountdown(){
    countdownElement.textContent = countdownTime;
    if (countdownTime === 0) {
        clearInterval(countdownInterval);
        alert('Time is up!');
    } else {
        countdownTime--;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);