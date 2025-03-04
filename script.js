const BASE_URL = "https://ai-pembukuan-backend.up.railway.app"; // Ganti dengan URL backend yang benar

async function register() {
    const email = document.getElementById("email_reg").value;
    const password = document.getElementById("password_reg").value;

    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
}

async function login() {
    const email = document.getElementById("email_login").value;
    const password = document.getElementById("password_login").value;

    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
}
