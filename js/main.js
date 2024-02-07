const menuBtn = document.querySelector(".menu__btn")
const menuClose = document.querySelector(".menu__close")
const menuList = document.querySelector(".menu__list")
const menuShadow = document.querySelector(".menu--close")


menuBtn.addEventListener("click", openMenu)
menuClose.addEventListener("click", closeMenu)

function openMenu(e) {
    menuList.classList.add("menu__list--open")
    menuShadow.classList.add("menu--open")
}
function closeMenu(e) {
    menuList.classList.remove("menu__list--open")
    menuShadow.classList.remove("menu--open")
}