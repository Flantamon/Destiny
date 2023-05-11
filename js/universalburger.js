const menu_btn = document.querySelector(".svg");
const burger_menu = document.querySelector(".burger-menu");

let active = false;

menu_btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    if (active)
    {
        burger_menu.style.right = "-500px";
        active = !active;
    }
    else
    {
        burger_menu.style.right = 0;
        active = !active;
    }
})