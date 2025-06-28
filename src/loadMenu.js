function loadMenu(){
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    headline.classList.add('menu-headline');
    menu.appendChild(headline);
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    const items = [
        { name: 'Pizza', price: '$10' },
        { name: 'Burger', price: '$8' },
        { name: 'Pasta', price: '$12' },
        { name: 'Salad', price: '$7' }
    ];
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('menu-item');
        listItem.textContent = `${item.name} - ${item.price}`;
        menuList.appendChild(listItem);
    });
    menu.appendChild(menuList);
    content.appendChild(menu);
}
export default loadMenu;