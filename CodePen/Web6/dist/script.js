document.querySelectorAll('.kawaii').forEach(slider => {
    slider.addEventListener('input', () => {
        // Get the base color from the slider's style
        let baseColor = getComputedStyle(slider).getPropertyValue('--base').trim();
        let intensity = slider.value; // Slider value

        // Modify the color based on the slider value (lighten/darken)
        let newColor = `hsl(${intensity * 10}, 50%, 70%)`; // Example of using HSL

        // Apply it as the background color
        document.body.style.backgroundColor = newColor;
    });
});