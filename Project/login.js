import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_3OXfmTe-gVBA8iaofPE90n4Hcsr_7CY",
    authDomain: "signupform-fdc9c.firebaseapp.com",
    projectId: "signupform-fdc9c",
    storageBucket: "signupform-fdc9c.appspot.com",
    messagingSenderId: "485882060806",
    appId: "1:485882060806:web:29e6205ed4f2b76dc7e387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

var Email = document.getElementById("email");
var Password = document.getElementById("password");
var MainForm = document.getElementById("mainform");

// Function to handle login form submission
let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, Email.value, Password.value)
        .then((credentials) => {
            console.log("Credentials after login:", credentials);

            const userUid = credentials.user.uid;
            console.log("User UID:", userUid);

            get(child(dbref, 'UserAuthList/' + userUid)).then((snapshot) => {
                console.log("Snapshot after retrieving user data:", snapshot.val());

                if (snapshot.exists() && snapshot.val() !== null) {
                    const userInformation = {
                        email: snapshot.val().email,
                        firstname: snapshot.val().firstname,
                        lastname: snapshot.val().lastname,
                        role: snapshot.val().role // assuming you have a 'role' field in your user data
                    };

                    console.log("User Information:", userInformation);

                    // Check if the user has the role 'patient'
                    if (userInformation.role === 'patient') {
                        // Set the 'isLoggedIn' flag in localStorage
                        localStorage.setItem('isLoggedIn', 'true');

                        // Store user credentials and information in sessionStorage
                        sessionStorage.setItem("user-creds", JSON.stringify(credentials));
                        sessionStorage.setItem("user-info", JSON.stringify(userInformation));

                        // Show success message and redirect to home.html
                        alert("Login successful!");
                        window.location.href = 'home.html';
                    } else if (userInformation.role === 'doctor') {
                        // Invalid login, doctor trying to login as a patient
                        alert("Error: You do not have permission to log in as a patient.");
                    }
                } else {
                    // Invalid login, user data not found
                    alert("Error: Invalid login. User data not found.");
                }
            });
        })
        .catch((error) => {
            // Handle sign-in errors
            alert("Error: Unable to sign in. Please check your credentials and try again.");
            console.error("Sign-in error:", error);
        });
}

// Event listener for the login form submission
MainForm.addEventListener('submit', SignInUser);
