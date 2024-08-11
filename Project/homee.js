// Function to update navigation links based on user login status
function updateNavigationLinks() {
    const loginLink = document.getElementById('loginLink');
    const signupLink = document.getElementById('signupLink');
    const profileLink = document.getElementById('profileLink');
    const logoutButton = document.getElementById('logoutButton');
    const doctorSection = document.getElementById('joinn'); // Update to use getElementById

    if (isLoggedIn()) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        profileLink.style.display = 'block';
        logoutButton.style.display = 'block';
        hideDoctorSection(); // Hide 'are you a doctor' section when logged in
    } else {
        loginLink.style.display = 'block';
        signupLink.style.display = 'block';
        profileLink.style.display = 'none';
        logoutButton.style.display = 'none';
        showDoctorSection(); // Show 'are you a doctor' section when logged out
    }
}

// Call updateNavigationLinks when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateNavigationLinks();
    hideWelcomeMessage();
});

// Rest of your existing code...
// Function to check if the user is logged in
function isLoggedIn() {
    // Check if isLoggedIn flag is set to true in localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to hide the welcome message
function hideWelcomeMessage() {
    let MsgHead = document.getElementById('msg');
    let GreetHead = document.getElementById('greet');

    if (MsgHead && GreetHead && !isLoggedIn()) {
        MsgHead.innerText = '';  // Clear the message
        GreetHead.innerText = '';  // Clear the greeting
    }
}

// Function to display the welcome message
function displayWelcomeMessage(UserCreds) {
    let MsgHead = document.getElementById('msg');
    let GreetHead = document.getElementById('greet');

    if (UserCreds && MsgHead && GreetHead) {
        // Use first name and last name from sessionStorage if available
        const userInfoString = sessionStorage.getItem("user-info");
        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

        if (userInfo) {
            const firstName = userInfo.firstname || '';
            const lastName = userInfo.lastname || '';
            GreetHead.innerText = `Welcome ${firstName} ${lastName}!`;
        } else {
            // Handle the case where user information is not available
            GreetHead.innerText = `Welcome User!`;
        }
    }
}

// Function to update navigation links based on user login status
function updateNavigationLinks() {
    const loginLink = document.getElementById('loginLink');
    const signupLink = document.getElementById('signupLink');
    const profileLink = document.getElementById('profileLink');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn()) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        profileLink.style.display = 'block';
        logoutButton.style.display = 'block';
    } else {
        loginLink.style.display = 'block';
        signupLink.style.display = 'block';
        profileLink.style.display = 'none';
        logoutButton.style.display = 'none';
    }
}

// Call updateNavigationLinks and hideWelcomeMessage when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateNavigationLinks();
    hideWelcomeMessage();
});

// Function to be called after successful login
function onLoginSuccess() {
    // Set isLoggedIn state to true
    localStorage.setItem('isLoggedIn', 'true');

    // Update navigation links
    updateNavigationLinks();

    // Display welcome message
    const UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
    displayWelcomeMessage(UserCreds);
}

// Function to handle logout
function logout() {
    // Clear the isLoggedIn flag in localStorage
    localStorage.removeItem('isLoggedIn');
    // Update navigation links after logout
    updateNavigationLinks();

    // Hide the welcome message
    hideWelcomeMessage();
}

// Add event listener for logout button
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function (event) {
    event.preventDefault();
    logout();
});
