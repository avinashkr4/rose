// Handwritten love letter pop-up
function showLoveLetter() {
    document.getElementById("loveLetter").classList.remove("hidden");
}

// Falling rose petals
function createFallingPetals() {
    const petal = document.createElement("div");
    petal.classList.add("rose-petal");
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);  // Remove petal after animation ends
}

// Generate falling petals every second
setInterval(createFallingPetals, 300);

// Special Surprise Section
function showSurprise() {
    document.getElementById("specialSurprise").style.display = "block";
}

