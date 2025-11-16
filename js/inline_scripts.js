// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable text selection via mouse drag
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

// Disable image dragging
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// Initialize VanillaTilt with ultra-smooth, subtle settings
VanillaTilt.init(document.querySelector(".card"), {
    max: 8,                         // Very subtle tilt
    speed: 1000,                    // Slow, graceful movement
    reverse: true,
    easing: "cubic-bezier(.19,1,.22,1)",  // Ultra-smooth easing
    glare: false,
    scale: 1.005,                   // Barely noticeable scale
    transition: true,
    reset: true,
    "reset-to-start": true,
    perspective: 1200,              // Deeper perspective for subtlety
    gyroscope: false,
    "full-page-listening": false,
    axis: null
});