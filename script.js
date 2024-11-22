document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle menu icon and navbar visibility
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Read More / Read Less functionality
const readMoreBtn = document.getElementById('read-more');
const text = document.getElementById('text');
const dots = document.getElementById('dots');
const moreText = document.getElementById('more');

// Initially hide the additional text
moreText.style.display = 'none';

readMoreBtn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        dots.style.display = 'none';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        dots.style.display = 'inline';
        readMoreBtn.textContent = 'Read More';
    }
});

    // Initialize Typed.js for typing effect
    const options = {
        strings: ['Frontend Developer', 'Video Editor', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    };

    const typed = new Typed('.typing', options);

    // Add click event to links to remove toggle icon and navbar
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Initialize ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 1500,
        delay: 200
    });

    // Reveal elements
    ScrollReveal().reveal('.home-content, .heading', { origin: 'Top' });
    ScrollReveal().reveal('.reveal', { origin: 'left' });
    ScrollReveal().reveal('.robot', { origin: 'right' });

    // Select the animated section
    const animatedSection = document.querySelector('.animated-section');

    // Function to check if the animated section is in view
    const checkAnimation = () => {
        const animatedSectionPosition = animatedSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Trigger animation for the animated section when it comes into view
        if (animatedSectionPosition < screenPosition && animatedSectionPosition > 0) {
            animatedSection.classList.add('show-animate');
        }
    };

    // Initial check when the page loads
    checkAnimation();

    // Scroll event for active link and sticky navbar
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('.navbar a');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Sticky navbar
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Check if the animated section is in view
        checkAnimation();
    });
});