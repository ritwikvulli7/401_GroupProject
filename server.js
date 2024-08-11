const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the GDSC directory
app.use(express.static(path.join(__dirname, 'GDSC')));

// Define routes for your HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'homepage.html')); // Set the default file, e.g., index.html
});

app.get('/animationportal', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'animationportal.html'));
});

app.get('/appointments', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'appointments.html'));
});

app.get('/asha_portal', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'asha_portal.html'));
});

app.get('/asha-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'asha-appointment.html'));
});

app.get('/ashalogin', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'ashalogin.html'));
});

app.get('/ashaprofile', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'ashaprofile.html'));
});

app.get('/ashasignup', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'ashasignup.html'));
});

app.get('/doctor', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'doctor.html'));
});

app.get('/doctor-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'doctor-appointment.html'));
});

app.get('/doctor-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'doctor-login.html'));
});

app.get('/doctorprofile', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'doctorprofile.html'));
});

app.get('/doctor-registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'doctor-registration.html'));
});

app.get('/health', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'health.html'));
});

app.get('/patient', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'patient.html'));
});

app.get('/patientDetails', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'patientDetails.html'));
});

app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'payment.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'profile.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'GDSC', 'signup.html'));
});

// Add any additional routes as needed
// Example:
// app.get('/route_name', (req, res) => {
//   res.sendFile(path.join(__dirname, 'GDSC', 'filename.html'));
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});