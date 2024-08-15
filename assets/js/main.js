document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleTheme');
    const icon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', function () {
        document.documentElement.classList.toggle('light-mode');
        
        if (document.documentElement.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
