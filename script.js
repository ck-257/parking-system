let availableSpaces = Array.from({ length: 1000 }, (_, index) => index + 1);
let reservedSpaces = [];

function updateAvailableSpaces() {
    const availableSpacesCount = availableSpaces.length;
    document.getElementById('availableSpaces').innerText = `Available Spaces: ${availableSpacesCount}`;
}

function reserveSpace() {
    if (availableSpaces.length > 0) {
        const spaceNumber = availableSpaces.shift();
        reservedSpaces.push(spaceNumber);
        updateAvailableSpaces();
        displayReceipt(spaceNumber);
    } else {
        alert('No available parking spaces.');
    }
}

function displayReceipt(spaceNumber) {
    const currentReservation = document.getElementById('currentReservation');
    const historySection = document.getElementById('history');

    const receipt = document.createElement('div');
    receipt.innerHTML = `Parking space reserved!<br>Receipt:<br>Space Number: ${spaceNumber}`;
    currentReservation.innerHTML = ''; // Clear previous current reservation
    currentReservation.appendChild(receipt);

    const historyEntry = document.createElement('div');
    historyEntry.innerText = `Reserved Space Number: ${spaceNumber}`;
    historySection.appendChild(historyEntry);
}

function navigateToReservedSpace() {
    if (reservedSpaces.length > 0) {
        displayMap(reservedSpaces[reservedSpaces.length - 1]); // Display map for the latest reservation
    } else {
        alert('No spaces reserved yet.');
    }
}

function displayMap(spaceNumber) {
    // Add your code for displaying the map here
    console.log(`Display map for space number: ${spaceNumber}`);
}

function downloadReceipt() {
    const currentReservation = document.getElementById('currentReservation');
    const receiptText = currentReservation.innerText;

    if (receiptText) {
        const blob = new Blob([receiptText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'parking_receipt.txt';
        link.click();
    } else {
        alert('No recent reservation to download.');
    }
}
