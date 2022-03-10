const navBar = () => {
    const navMenu = document.getElementById('menu');
    const navLists = document.getElementsByClassName('nav-lists')[0];
    navMenu.addEventListener("click", () => {
        navLists.classList.toggle('active');
    })
}
const showYear = () => {
    const date = new Date();
    let year = date.getFullYear();
    document.getElementById('date-year').innerHTML += year;
}
navBar();
showYear();