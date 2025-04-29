const digits = Array.from({ length: 10 }, (_, i) => i);
let shuffledDigits = [...digits];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createInputs() {
    shuffledDigits = [...digits];
    shuffleArray(shuffledDigits);

    const container = document.getElementById('inputsContainer');
    container.innerHTML = '';

    
    shuffledDigits.forEach((digit, index) => {
        const label = document.createElement('label');
        label.innerText = `Digit ${digit + 1}: `;
        
        const input = document.createElement('input');
        input.type = 'number';
        input.name = `position${digit}`;
        input.setAttribute('data-position', digit);
        input.required = true;
        input.min = 0;
        input.max = 9;
        
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    });
}

document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneDigits = new Array(10);
    
    const inputs = document.querySelectorAll('#inputsContainer input');
    
    inputs.forEach(input => {
        const position = parseInt(input.getAttribute('data-position'));
        const value = input.value;
        phoneDigits[position] = value;
    });
    
    const phoneNumber = phoneDigits.join('');
    document.getElementById('result').textContent = `Your phone number is: ${phoneNumber}`;
});

createInputs();