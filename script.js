(function () {
    var btn = document.getElementById('hamburger');
    var menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        btn.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
}());
