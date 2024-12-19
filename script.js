document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        perPage: 4,  
        rewind: true,
        gap: "1rem",
        pagination: true,
        arrows: true,
    });

    splide.mount();
});