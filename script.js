const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section');

// Function to check which section is currently in view
function changeNavbarColor() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            // Remove previous section classes from navbar
            navbar.className = ''; 

            // Add class based on current section
            navbar.classList.add(section.id + '-section');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', changeNavbarColor);
