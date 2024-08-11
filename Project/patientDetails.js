// patientDetails.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

// Use an observer to listen for changes in the authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is logged in
        const userId = user.uid;

        // Retrieve patient details from Firestore
        const patientRef = ref(db, 'UserAuthList/' + userId);

        onValue(patientRef, (snapshot) => {
            const patientData = snapshot.val();

            if (patientData) {
                // Patient data found
                displayPatientDetails(patientData);
            } else {
                alert("No patient document found!");
            }
        }, (error) => {
            console.error("Error getting patient data:", error);
            alert("Error getting patient data. Please try again later.");
        });
    } else {
        // User is not logged in
        alert("User is not logged in.");
    }
});

function displayPatientDetails(patientData) {
    const patientDetailsContainer = document.getElementById('patientDetails');

    const detailsHTML = `
        <p>Email: ${patientData.email}</p>
        <p>Full Name: ${patientData.firstname} ${patientData.lastname}</p>
        <!-- Add more patient details as needed -->
    `;

    patientDetailsContainer.innerHTML = detailsHTML;
}
