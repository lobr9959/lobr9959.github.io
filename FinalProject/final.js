document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const digitSelect = document.getElementById('digitSelect');
    const verifyButton = document.getElementById('verifyButton');
    const indicator = document.getElementById('indicator');
    const phoneDisplay = document.getElementById('phoneDisplay');
    const attemptsElement = document.getElementById('attempts');
    const messageElement = document.getElementById('message');
    const currentPositionElement = document.getElementById('currentPosition');
    const submitButton = document.getElementById('submitButton');
    const resultModal = document.getElementById('resultModal');
    const finalNumber = document.getElementById('finalNumber');
    const closeModal = document.getElementById('closeModal');
    const videoModal = document.getElementById('videoModal');
    const restartButton = document.getElementById('restartButton');
    const totalFailsElement = document.getElementById('totalFails');
    const buzzer = document.getElementById('wrongBuzzer');
    const sadViolin = document.getElementById('sadViolin');
    const win = document.getElementById('win');
    const wow = document.getElementById('wow');


    // Game variables
    let phoneNumber = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let currentPosition = 0;
    let attempts = 3;
    let totalFailedAttempts = 0;
    let indicatorPosition = 0;
    let animationId;
    const indicatorSpeed = 100;
    let isGameOver = false;
    let direction = 1;
    let lastTime = null;


    function initGame() {
        phoneNumber = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
        currentPosition = 0;
        attempts = 3;
        totalFailedAttempts = 0;
        indicatorPosition = 0;
        direction = 1;
        isGameOver = false;
        lastTime = null;

        updateDisplay();
        startIndicator();

        attemptsElement.textContent = attempts;
        messageElement.textContent = '';
        submitButton.classList.add('hidden');

        digitSelect.selectedIndex = Math.floor(Math.random() * 10);
    }

    function startIndicator() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        indicatorPosition = 0;
        direction = 1;
        lastTime = null;

        animationId = requestAnimationFrame(moveIndicator);
    }

    function moveIndicator(timestamp) {
        if (isGameOver) return;

        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;

        if (elapsed > indicatorSpeed) {
            const gameBarWidth = document.querySelector('.game-bar').offsetWidth;
            const step = gameBarWidth / 10;

            indicatorPosition += 0.5 * direction;

            if (indicatorPosition >= 10) {
                indicatorPosition = 9.99;
                direction = -1;
            } else if (indicatorPosition <= 0) {
                indicatorPosition = 0.01;
                direction = 1;
            }

            indicator.style.left = (indicatorPosition * step) + 'px';

            lastTime = timestamp;
        }

        animationId = requestAnimationFrame(moveIndicator);
    }

    function updateDisplay() {
        phoneDisplay.textContent = phoneNumber.join('');
        currentPositionElement.textContent = currentPosition + 1;
    }

    verifyButton.addEventListener('click', function () {
        if (isGameOver) return;

        const selectedDigit = parseInt(digitSelect.value);
        const indicatorDigit = Math.floor(indicatorPosition);

        if (selectedDigit === indicatorDigit) {
            wow.currentTime = 0;
            wow.play();
            phoneNumber[currentPosition] = selectedDigit;
            messageElement.textContent = 'Correct! ✓';
            messageElement.style.color = '#4CAF50';
            currentPosition++;

            if (currentPosition >= 10) {
                isGameOver = true;
                submitButton.classList.remove('hidden');
                messageElement.textContent = 'Phone number complete! You can submit now.';
            } else {
                attemptsElement.textContent = attempts;
                startIndicator();
                digitSelect.selectedIndex = Math.floor(Math.random() * 10);
            }
        } else {
            buzzer.currentTime = 0;
            buzzer.play();

            attempts--;
            totalFailedAttempts++;
            attemptsElement.textContent = attempts;
            messageElement.textContent = `Wrong! The indicator was on ${indicatorDigit}. Try again.`;
            messageElement.style.color = '#ff5252';

            if (attempts <= 0) {
                sadViolin.currentTime = 0;
                sadViolin.play();
                isGameOver = true;
                totalFailsElement.textContent = totalFailedAttempts;
                videoModal.classList.remove('hidden');
            }
        }

        updateDisplay();
    });

    submitButton.addEventListener('click', function () {
        win.play();
        finalNumber.textContent = phoneNumber.join('');
        resultModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', function () {
        resultModal.classList.add('hidden');
        win.pause();
        initGame();
    });

    restartButton.addEventListener('click', function () {
        videoModal.classList.add('hidden');
        sadViolin.pause();
        initGame();
    });

    initGame();
});
