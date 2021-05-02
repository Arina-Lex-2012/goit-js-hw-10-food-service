import './sass/main.scss';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const switchElem = document.getElementById('theme-switch-toggle');

switchElem.addEventListener('change', onChange);


// когда солнце (светлая тема), тогда checked == false
function onChange(event){ 
    if (event.target.checked === true) { // если тема темная        
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        console.log(event.target.checked);
    }else{
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        console.log(event.target.checked);
    }
    // console.log(event.target);
    // console.log(event.target.checked);
    // document.body.classList.add('dark-theme');
    // // event.target.name = Theme.DARK;
    // // event.target.checked = false;
    // console.log(event.target);
    // console.log(event.target.checked);
};



