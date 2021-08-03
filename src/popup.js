function calendar(e) {
    const message = document.getElementById('message');
    message.innerText = "Клик"
};

document.addEventListener('DOMContentLoaded', function() {
    const pixel = document.getElementById('match');
    pixel.addEventListener('click', calendar);
});
