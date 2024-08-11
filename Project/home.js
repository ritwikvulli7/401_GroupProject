// Rest of your existing code...
// Function to get user's location
// Function to get user's location
function getLocation() {
    const locationDisplay = document.getElementById('locationDisplay');
    locationDisplay.innerHTML = 'Fetching your location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                locationDisplay.innerHTML = `Your current location: Latitude ${latitude}, Longitude ${longitude}`;
            },
            (error) => {
                locationDisplay.innerHTML = 'Error getting location';
            }
        );
    } else {
        locationDisplay.innerHTML = 'Geolocation is not supported by this browser.';
    }
}


// Function to show user's location
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Replace 'YOUR_OPENCAGE_API_KEY' with your actual OpenCage API key
    const apiKey = 'd8002edd0e3845dfbd115130c95b7cbe';
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const locationName = data.results[0].formatted;
                document.getElementById('locationInfo').innerText = `Your current location: ${locationName}`;
            } else {
                document.getElementById('locationInfo').innerText = 'Location information not available.';
            }
        })
        .catch(error => {
            console.error('Error fetching location information:', error);
            document.getElementById('locationInfo').innerText = 'Error fetching location information.';
        });
}

// Function to handle location errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

//Event listener for page load
document.addEventListener('DOMContentLoaded', function () {
    updateNavigationLinks();

    // Add event listener for logout button
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        logout();
    });

    // Call the onLoginOrSignup function to handle login/signup changes
    const currentPage = window.location.pathname.split("/").pop();

    // Call onLoginOrSignup only if the page is home.html
    if (currentPage === "home.html") {
        onLoginOrSignup(true);
    } else {
        onLoginOrSignup(false);
    }

    // Get user's location
    getLocation();
});

