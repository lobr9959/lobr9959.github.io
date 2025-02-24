const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');


function backgroundColor()
{
    let red = redSlider.value;
    let green = greenSlider.value;
    let blue = blueSlider.value;


    let rgbaValue = `rgb(${red}, ${green}, ${blue}, 0.25)`;

    document.body.style.backgroundColor = rgbaValue;
}

redSlider.addEventListener('input', backgroundColor);
greenSlider.addEventListener('input', backgroundColor);
blueSlider.addEventListener('input', backgroundColor);

backgroundColor();
