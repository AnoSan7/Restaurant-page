import restaurantImage from '../images/restaurant.png';
function loadHome(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
    const headline = document.createElement('h1');
    headline.classList.add('home-headline');
    headline.textContent = 'Welcome to Our Restaurant';
    content.appendChild(headline);
    const img= document.createElement('img');
    img.classList.add('home-image');
    img.src = restaurantImage;
    img.alt = 'Restaurant Image';
    img.style.width = '300px';
    content.appendChild(img);
    const description = document.createElement('p');
    description.classList.add('home-description');
    description.textContent = 'Experience the best dining with us. Enjoy our delicious food and excellent service.';
    content.appendChild(description);
}
export default loadHome;