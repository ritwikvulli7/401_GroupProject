// app.js
const firebaseConfig = {
    apiKey: "AIzaSyDDJVMT2iCzXm3oYJKC-ZTa2eN8_6lrp18",
    authDomain: "sample-3703c.firebaseapp.com",
    projectId: "sample-3703c",
    storageBucket: "sample-3703c.appspot.com",
    messagingSenderId: "740342374411",
    appId: "1:740342374411:web:a3c49cb67ac30276c9e70e",
    measurementId: "G-538MYRX4BH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Function to handle signup
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // After signup, redirect to role selection page
            window.location.href = 'select_role.html';
        })
        .catch((error) => {
            console.error(error.message);
        });
}

// Function to handle login
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Redirect based on user role
            checkUserRole(user.uid);
        })
        .catch((error) => {
            console.error(error.message);
        });
}

// Function to check user role and redirect accordingly
function checkUserRole(uid) {
    // Implement role-based redirection logic (explained in the next step)
}
