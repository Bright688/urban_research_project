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
        // Check media query
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        
        if (mediaQuery.matches) {
            // Apply white background and padding when the dropdown is shown and the viewport is above 768px
            if (dropdownMenu.classList.contains('show')) {
              
                servicesDropdown.style.fontWeight = '900';
                servicesDropdown.style.backgroundColor = 'rgb(200, 218, 217, 0.5)';
                servicesDropdown.style.color = 'black';

            } else {
                servicesDropdown.style.backgroundColor = '';
                servicesDropdown.style.padding = '';
            }
        } else {
            // Remove background and padding for smaller viewports
            servicesDropdown.style.backgroundColor = '';
            servicesDropdown.style.padding = '';
        }
        // Remove active class if dropdown is open
        if (dropdownMenu.classList.contains('show')) {
            servicesDropdown.classList.remove('active');
           
            
        } else {
            servicesDropdown.classList.add('active');
            servicesDropdown.style.backgroundColor = '';
        }
    });


    // Close dropdown if clicking outside the dropdown menu
    document.addEventListener('click', function(event) {
        if (!servicesDropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            arrowIcon.classList.remove('rotate');
            servicesDropdown.classList.remove('active');
            servicesDropdown.style.backgroundColor = '';
        }
    });    

});

//Pricing Calculator
document.addEventListener('DOMContentLoaded', function() {
    const serviceType = document.querySelector('#serviceType');
    const numPages = document.querySelector('#numPages');
    const deadline = document.querySelector('#deadline');
    const totalPrice = document.querySelector('#totalPrice');

    // Base price per page in dollars
    const basePricePerPage = 6;

    // Deadline multipliers
    const deadlineMultiplier = {
        10: 1,
        9: 1.1,
        8: 1.2,
        7: 1.3,
        6: 1.4,
        5: 1.5,
        4: 1.6,
        3: 1.7,
        2: 1.8,
        1: 2
    };

    function calculateTotalPrice() {
        const pages = parseInt(numPages.value) || 0;
        const multiplier = deadlineMultiplier[parseInt(deadline.value)] || 1;
        const total = basePricePerPage * pages * multiplier;
        totalPrice.value = `$${total.toFixed(2)}`;
        console.log(total);
    }

    serviceType.addEventListener('change', calculateTotalPrice);
    numPages.addEventListener('change', calculateTotalPrice);
    deadline.addEventListener('change', calculateTotalPrice);
    
    //feature section animation
    const features = document.querySelectorAll('.feature');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});


