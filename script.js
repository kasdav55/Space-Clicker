let clickCount = 0;
const winCount = 100000000;

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;

    if (clickCount >= winCount) {
        alert('Congratulations! You have clicked on the space 100,000,000 times and won the game!');
        resetGame();
    }
});

function resetGame() {
    clickCount = 0;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
}
