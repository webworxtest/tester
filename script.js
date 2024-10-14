const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Toggle Hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('nav-active');
});

// Toggle dropdown menu when clicking the ▽ icon
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = toggle.closest('.dropdown');
        
        // Toggle the active state of the dropdown to open/close it
        dropdown.classList.toggle('active');
    });
});

// Prevent opening the dropdown when clicking the "Dienstleistungen" link
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1200) {
            e.preventDefault();
        }
    });

    // Prevent opening the dropdown when clicking the dropdown toggle
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Remove hover functionality on small screens
    dropdown.addEventListener('mouseenter', (e) => {
        if (window.innerWidth > 1200) {
            dropdown.classList.add('active');
        }
    });

    dropdown.addEventListener('mouseleave', (e) => {
        if (window.innerWidth > 1200) {
            dropdown.classList.remove('active');
        }
    });
});

// Reset the dropdown and hamburger menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('nav-active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Close dropdowns when clicking outside the dropdown in mobile view
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1200) {
        const clickedInsideDropdown = e.target.closest('.dropdown');
        dropdowns.forEach(dropdown => {
            if (dropdown !== clickedInsideDropdown) {
                dropdown.classList.remove('active');
            }
        });
    }
});