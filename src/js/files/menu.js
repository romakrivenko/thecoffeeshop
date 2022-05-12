window.onscroll = function() {menuSize()};

export function menuSize() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "menu__short" + " title_alt";
    } else {
        document.getElementById("menu").className = "menu" + " title_alt";
    }
}