function checkAdminLogin() {
    var adminAccount = {
        email: "admin@gmail.com",
        password: "admin123"
    }
    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;
    if (email.localeCompare(adminAccount.email) === 0 && password.localeCompare(adminAccount.password) === 0) {
        alert(document.getElementById("slider"));
        alert('true');
        location = 'index.html';
    }
    else {
        location = 'index.html'
    }
}