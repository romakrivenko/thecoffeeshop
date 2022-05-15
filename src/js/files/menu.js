// window.onscroll = function() {menuSize()};
//
// export function menuSize() {
//     let menuDefault = "menu"
//     let titleAlt = "title_alt"
//     let menuShort = "menu__short"
//     if (document.documentElement.scrollTop > 50) {
//         document.getElementById("menu").className = `${menuShort} ${titleAlt}`;
//     } else {
//         document.getElementById("menu").className = `${menuDefault} ${titleAlt}`;
//     }
// }

export function openMenu()  {
        $('.hamburger').click(function() {
            $('.menu__list_container').toggleClass("active");
            $(this).toggleClass("open");
            $('body').toggleClass('lock');
        });
}
