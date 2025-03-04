const BACKEND_URL = "https://ai-pembukuan-backend.up.railway.app";  // Ganti dengan URL backend

// Fungsi Login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("loginResult").innerText = data;
    })
    .catch(error => console.error("Error:", error));
}

// Fungsi Registrasi
function register() {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("registerResult").innerText = data;
    })
    .catch(error => console.error("Error:", error));
}
