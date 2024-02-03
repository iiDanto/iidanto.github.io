let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.body.classList.add("scrolling-down");
    } else {

        document.body.classList.remove("scrolling-down");
    }

    lastScrollTop = currentScroll;
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    }
}
