const hamburguer = document.getElementById("header-hamburguer");
const menu = document.getElementById("header-menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});