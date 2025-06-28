function loadAbout(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
    const headline = document.createElement('h1');
    headline.classList.add('about-headline');
    headline.textContent = 'About Us';
    content.appendChild(headline);
    const description = document.createElement('p');
    description.classList.add('about-description');
    description.textContent = `We are a family-owned restaurant dedicated to providing the best dining experience
                                with a focus on quality ingredients and exceptional service. Our chefs create dishes
                                that celebrate the flavors of our heritage, and we strive to make every visit memorable.`;
    content.appendChild(description);
    const mission = document.createElement('p');
    mission.classList.add('about-mission');
    mission.textContent = `Our mission is to bring people together through food, creating a warm and inviting atmosphere
                            where everyone feels at home. We believe in sustainability and source our ingredients locally
                            whenever possible, ensuring that our dishes are not only delicious but also environmentally friendly.`;
    content.appendChild(mission);
    const vision = document.createElement('p');
    vision.classList.add('about-vision');
    vision.textContent = `Our vision is to be a community hub where friends and families gather
                            to enjoy great food and create lasting memories. We aim to expand our reach while maintaining
                            the personal touch that makes our restaurant special.`;
    content.appendChild(vision);
}
export default loadAbout;