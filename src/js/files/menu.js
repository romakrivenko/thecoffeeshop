export function openMenu()  {
        $('.hamburger').click(function() {
            $('.menu__list_container').toggleClass("active");
            $(this).toggleClass("open");
            $('body').toggleClass('lock');
        });
}

export function dropMenu()  {
    $('#dropBtn').click(function() {
        $('#dropDown').toggleClass("show");
        $('.fa').toggleClass("fa-caret-up");
    });
}

// export function dropMenu() {
//     document.getElementById("dropDown").classList.toggle("show");
// }
//
// window.onclick = function(e) {
//     if (!e.target.matches('dropBtn')) {
//         var dropDown = document.getElementById("dropDown");
//         if (dropDown.classList.contains('show')) {
//             dropDown.classList.remove('show');
//         }
//     }
// }
