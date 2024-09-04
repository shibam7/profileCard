document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.contact-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Contact button clicked!');
        });
    }
});
