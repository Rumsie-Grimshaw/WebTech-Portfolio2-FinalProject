const initApp = () => {
    const hamburgerBtn = document.getElementById("button-hamburger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener("click", toggleMenu)
    mobileMenu.addEventListener("click", toggleMenu)
}



document.addEventListener("DOMContentLoaded", initApp)