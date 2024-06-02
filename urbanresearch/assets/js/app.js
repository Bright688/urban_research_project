document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function () {
        var toggler = document.querySelector('.navbar-toggler');
    
        toggler.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });
    
    
    const servicesDropdown = document.querySelector('#servicesDropdown');
    const arrowIcon = servicesDropdown.querySelector('.arrow-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    servicesDropdown.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
        arrowIcon.classList.toggle('rotate');
        servicesDropdown.classList.toggle('active');

        // Remove active class if dropdown is open
        if (dropdownMenu.classList.contains('show')) {
            servicesDropdown.classList.remove('active');
        } else {
            servicesDropdown.classList.add('active');
        }
    });

    // Close dropdown if clicking outside the dropdown menu
    document.addEventListener('click', function(event) {
        if (!servicesDropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            arrowIcon.classList.remove('rotate');
            servicesDropdown.classList.remove('active');
        }
    });
});