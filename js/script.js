document.addEventListener("DOMContentLoaded", function () {
    const categoryLi = document.querySelectorAll(".our-work .container ul li");
    const images = document.querySelectorAll(".our-work .box .image");

    categoryLi.forEach((li) => {
        li.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            filterImages(category); // Call the filtering function
        });
    });

    function filterImages(category) {
        images.forEach((image) => {
            const imageCategory = image.getAttribute("data-category");
            image.style.display =
                category === "all" || imageCategory === category ? "block" : "none"; // Use style.display directly for better performance
        });
    }
});
