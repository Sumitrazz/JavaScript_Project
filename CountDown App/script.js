const endDateInput = document.getElementById("end-date-input");
const inputs = document.querySelectorAll("input[type='text']");

// Check if there's a stored end date in localStorage
const storedEndDate = localStorage.getItem("endDate");

if (storedEndDate) {
    // If there is, set the input value to the stored date
    endDateInput.value = storedEndDate;

    // Start the countdown with the stored date
    startCountdown(new Date(storedEndDate));
}

// Listen for changes in the end date input
endDateInput.addEventListener("change", function() {
    const endDate = new Date(this.value);

    // Store the selected end date in localStorage
    localStorage.setItem("endDate", this.value);

    // Start the countdown with the selected date
    startCountdown(endDate);
});

function startCountdown(endDate) {
    const now = new Date();
    const diff = (endDate - now) / 1000;

    if (diff < 0) {
        resetInputs();
        return;
    }

    // Update the countdown immediately when starting
    updateCountdown(endDate);

    // Start the interval to update the countdown every second
    setInterval(() => {
        updateCountdown(endDate);
    }, 1000);
}

function resetInputs() {
    inputs.forEach(input => input.value = "0");
}

function updateCountdown(endDate) {
    const now = new Date();
    const diff = (endDate - now) / 1000;

    if (diff < 0) {
        resetInputs();
        return;
    }

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
