const hamburguer = document.querySelector(".header__hamburguer");
const menu = document.querySelector(".header__options");

if (hamburguer && menu) {
    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}