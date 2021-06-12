const header = document.getElementById('header');
const adaptive = document.getElementById('adaptive');
const menu = document.getElementById('menu');
adaptive.addEventListener('click', switchMenu);
function switchMenu() {
    menu.classList.toggle('menu-none');
    header.classList.toggle('header-adaptive');
}