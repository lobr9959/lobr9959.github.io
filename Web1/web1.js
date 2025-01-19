// Poem text
const kiplingPoem = `<p>Watch you move out of time
Sign your name on the dotted line
If you wanna run and hide
Then tell me what you want from me
But I hope
That you'll bring some clarity
When I take myself too seriously
I'm left wide open
To leave so full of promises, you left me nothing
I heard your name
And it's nothing but a dream again
Forget your face and it carried all of me
I heard your name
And it's nothing but a dream again
Forget your face and it carried all of me
But I hope
That you'll bring some clarity
When I take myself too seriously
I'm left wide open
Did you go and make a lie to see me broken?
To leave so full of promises you left me nothing
I heard your name
And it's nothing but a dream again
Forget your face and it carried all of me
I heard your name
And it's nothing but a dream again
Forget your face and you carried all of me
I'll wait for too long
I don't need to be alone
To be alone
So this time, I'll just stand by
And watch as the months go by
When you find out I'm not really gone
Really gone
So this time, I'll just stand by
And watch as the months go by
When I find out that you're really gone
Really gone, really gone</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
