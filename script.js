(function () {
  var btn = document.getElementById("hamburger");
  var menu = document.getElementById("mobileMenu");
  var scrollAtOpen = 0;

  function closeMenu() {
    menu.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    if (open) {
      // Opening the menu makes the page taller, and the browser may shift the
      // scroll position to keep the content in place. Force layout first so
      // that shift is included here and isn't mistaken for the user scrolling.
      void menu.offsetHeight;
      scrollAtOpen = window.scrollY;
    }
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  // Close the menu once the user has scrolled at least 10px since opening it.
  window.addEventListener(
    "scroll",
    function () {
      if (!menu.classList.contains("open")) return;
      if (Math.abs(window.scrollY - scrollAtOpen) >= 10) closeMenu();
    },
    { passive: true },
  );
})();
