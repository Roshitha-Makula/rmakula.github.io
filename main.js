document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleModeButton = document.getElementById('toggle-mode');
    const workEntries = document.querySelectorAll('.work-entry');
    const toggleImage = document.getElementById('toggle-image');

    // Function to set the dark mode state
    function setDarkMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            toggleImage.src = 'sun.png'; // Change to the sun image path
        } else {
            body.classList.remove('dark-mode');
            toggleImage.src = 'moon.jpg'; // Change to the moon image path
        }
    }

    // Toggle light/dark mode based on user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);

    // Toggle mode button click event
    toggleModeButton.addEventListener('click', function () {
        const currentMode = body.classList.contains('dark-mode');
        const newMode = !currentMode;

        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    });


    // Implement click events for work/volunteer experiences
    workEntries.forEach(function (entry) {
        const companyName = entry.querySelector('h3').innerText;
        const position = entry.dataset.position;
        const duration = entry.dataset.duration;
        const description = entry.dataset.description;

        entry.addEventListener('click', function () {
            alert(`Work experience at ${companyName}:\n${position}\n${duration}\n${description}`);
        });
    });
});