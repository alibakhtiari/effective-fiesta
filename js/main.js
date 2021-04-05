/* toggle active class on header */
(function () {
    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('.menu-item a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].className += "is-active";
        }
    }
})();



/*smooth scroll*/
document
    .querySelectorAll('.nav__item a[href^="#"]')
    .forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });
    //html { scroll-behavior: smooth; }
