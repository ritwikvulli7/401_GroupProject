document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? '' : 'block';
    });
});


function scrollToSignup() {
    // Your existing code for scrolling logic
    // For demonstration purposes, let's assume you want to redirect to home.html
    window.location.href = 'signup.html';
}
function redirect(page) {
    window.location.href = `${page}.html`;
}

function scrollToSignup() {
    window.location.href = 'signup.html';
}
    getLocation