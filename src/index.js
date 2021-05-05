import './sass/main.scss';
import menuItemTpl from './templates/menu-item.hbs';
import menuItems from './menu.json';

// изменение темы
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const switchElem = document.getElementById('theme-switch-toggle');
switchElem.addEventListener('change', onChange);

if(localStorage.theme === Theme.DARK){
    switchElem.checked = true;
    document.body.classList.add(Theme.DARK);
};

function onChange(event){ 
    if (event.target.checked === true) {   // если тема темная        
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }; 
};


// создание шаблона и наполнение меню
const menuItemsEl = document.querySelector('.js-menu');
const menuMarkup = createMenuItems(menuItems);

menuItemsEl.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuItems(menuItems){
    // return menuItems.map(menuItem => menuItemTpl(menuItem)).join('');
    return menuItems.map(menuItemTpl).join('');
};










