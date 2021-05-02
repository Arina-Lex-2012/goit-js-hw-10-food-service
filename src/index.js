import './sass/main.scss';

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
     if (event.target.checked === true) { // если тема темная        
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        console.log(localStorage.theme);
    } else {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }; 
};



