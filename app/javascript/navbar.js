import dropdown from "./navbar/dropdown";

const menuLink = document.getElementById('dropdown');
const mobileMenu = document.getElementById('mobile-menu')
menuLink.addEventListener('click', () => {
    console.log('again')
})

dropdown(menuLink, mobileMenu);