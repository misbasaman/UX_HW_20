document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animated-section");

    function animateSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("animate");
            }
        });
    }

    // Initial animation check
    animateSections();

    // Scroll event listener
    window.addEventListener("scroll", animateSections);
});
