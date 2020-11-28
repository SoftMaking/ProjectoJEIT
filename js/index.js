window.onload = function () {
    scrollSpy('#menu', {
        offset: 5, // in pixels
        menuActiveTarget: 'a',
        sectionClass: '.scrollspy',
        activeClass: 'active',
        scrollContainer: ''
    })
}

/* DEFAULT SETUP */
/* window.onload = function () {
    scrollSpy('#menu', {
        offset: 0, // in pixels
        menuActiveTarget: 'li > a',
        sectionClass: '.scrollspy',
        activeClass: 'active',
        scrollContainer: ''
    })
} */