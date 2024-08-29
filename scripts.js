document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-item button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});
