const svgContainer = document.querySelector('.logo-anm');

const inLayer = document.getElementById('in');
const outLayer = document.getElementById('out');
const title = document.getElementById('title');
const navbar = document.querySelector('.navbar');


// Add a click event listener to trigger the animations
svgContainer.addEventListener('click', () => {
    inLayer.classList.add('open', 'zoom'); 
    outLayer.classList.add('open', 'zoom');

    navbar.classList.add('showMenu');
    title.classList.add('showTitle');
});


// asked chatGpt to assist this delay action:
inLayer.addEventListener('animationend', () => {
    // Delay adding the 'hidden' class for 3 seconds after animation ends
    setTimeout(() => {
        svgContainer.classList.add('hidden'); // Hide the SVG after 0.3 seconds
    }, 300); 
});

outLayer.addEventListener('animationend', () => {
    // Delay adding the 'hidden' class for 3 seconds after animation ends
    setTimeout(() => {
        svgContainer.classList.add('hidden'); // Hide the SVG after 0.3 seconds
    }, 300); 
});
