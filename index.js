document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");
    const leaves = document.querySelectorAll(".leaf");

    function animatePetals() {
        petals.forEach((petal, index) => {
            setTimeout(() => {
                petal.style.transform = "scale(1.1)";
                setTimeout(() => {
                    petal.style.transform = "scale(1)";
                }, 500);
            }, index * 300);
        });
    }

    function animateLeaves() {
        leaves.forEach((leaf) => {
            leaf.style.transform = "rotate(45deg)";
            setTimeout(() => {
                leaf.style.transform = "rotate(30deg)";
            }, 500);
        });
    }

    setInterval(() => {
        animatePetals();
        animateLeaves();
    }, 2000);
});