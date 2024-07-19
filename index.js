const initSlider = () => {
    const imageList = document.querySelector(".brands-container .image-list");
    const slideButtons = document.querySelectorAll(".brands-container .slide-button");

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


