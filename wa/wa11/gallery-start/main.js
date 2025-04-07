const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageArray = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const imageText = {
  'pic1.jpg' : 'Urban Exporation - man climbing is somethin he shouldnt',
  'pic2.jpg' : 'Quarry conveyor',
  'pic3.jpg' : 'abandoned room filled with orange goo at the bottom',
  'pic4.jpg' : 'New England rooftop',
  'pic5.jpg' : 'Colorado Cliffside'
}

/* Looping through images */

for (const image of imageArray) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', imageText[image]);
  newImage.classList.add('img-thumb');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', click => {
    displayedImage.src = click.target.src;
    displayedImage.alt = click.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
