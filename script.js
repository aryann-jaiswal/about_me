// script.js - Add your JavaScript here 

// Theme toggle and section switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    const workSection = document.getElementById('work');
    const playSection = document.getElementById('play');
    const timeLinks = document.querySelectorAll('.time-link');
    let isWorkMode = true;

    // Function to toggle between work and play modes
    function toggleMode() {
        isWorkMode = !isWorkMode;
        
        // Add transition class before changing the theme
        body.classList.add('transitioning');
        
        // Toggle dark mode
        body.classList.toggle('dark-mode');
        
        // Update button text and sections
        if (isWorkMode) {
            toggleBtn.textContent = 'Switch to 5-9';
            workSection.style.display = 'block';
            playSection.style.display = 'none';
            timeLinks[0].classList.add('active');
            timeLinks[1].classList.remove('active');
        } else {
            toggleBtn.textContent = 'Switch to 9-5';
            workSection.style.display = 'none';
            playSection.style.display = 'block';
            timeLinks[0].classList.remove('active');
            timeLinks[1].classList.add('active');
        }

        // Remove transition class after animation
        setTimeout(() => {
            body.classList.remove('transitioning');
        }, 500);
    }

    // Add click event listener to toggle button
    toggleBtn.addEventListener('click', toggleMode);

    // Add click event listeners to time links
    timeLinks.forEach(link => {
        link.addEventListener('click', () => {
            const time = link.getAttribute('data-time');
            if ((time === '9-5' && !isWorkMode) || (time === '5-9' && isWorkMode)) {
                toggleMode();
            }
        });
    });

    // Initialize the display
    playSection.style.display = 'none';
    timeLinks[0].classList.add('active');
}); 