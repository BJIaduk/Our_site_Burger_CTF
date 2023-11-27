var navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function (navItem) {
    navItem.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section ID from the href attribute
        var targetId = navItem.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Check if the target section is currently visible
            var isCurrentlyVisible = targetSection.style.display === 'block';

            // Toggle the 'active' class on the clicked menu item
            navItem.classList.toggle('active');

            // Hide all sections except the target section
            document.querySelectorAll('.hidden-section').forEach(function (section) {
                if (section !== targetSection) {
                    section.style.display = 'none';
                }
            });

            // Toggle the display of the target section
            targetSection.style.display = isCurrentlyVisible ? 'none' : 'block';
        }
    });
});
