const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageArray = ['pics1.JPG', `pics2.JPG`, `pics3.JPG`, `pics4.JPG`, `pics5.JPG`];
const imageText = {
  'pics1.JPG' : 'Urban Exporation - man climbing is somethin he shouldnt',
  'pics2.JPG' : 'Quarry conveyor',
  'pics3.JPG' : 'abandoned room filled with orange goo at the bottom',
  'pics4.JPG' : 'New England rooftop',
  'pics5.JPG' : 'Colorado Cliffside'
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
