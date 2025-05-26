// script.js - Add your JavaScript here 

// Theme toggle and section switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    const workSection = document.getElementById('work');
    const playSection = document.getElementById('play');
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
        } else {
            toggleBtn.textContent = 'Switch to 9-5';
            workSection.style.display = 'none';
            playSection.style.display = 'block';
        }

        // Remove transition class after animation
        setTimeout(() => {
            body.classList.remove('transitioning');
        }, 500);
    }

    // Add click event listener to toggle button
    toggleBtn.addEventListener('click', toggleMode);

    // Initialize the display
    playSection.style.display = 'none';
}); 