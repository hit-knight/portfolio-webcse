function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById("typed-text");
    const texts = ["Sanjib Behera", "A Web Developer"];
    const typingSpeed = 100;  // Typing speed in milliseconds
    const deletingSpeed = 60;  // Deleting speed in milliseconds
    const pauseDelay = 2000;   // Pause at end of typing before deleting
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            // Typing phase
            typedText.textContent += currentText.charAt(charIndex);
            charIndex++;
            
            // When full text is typed, pause before starting to delete
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseDelay);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            // Deleting phase
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            // When text is fully deleted, switch to next text
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Loop through texts
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        }
    }

    type();
});

