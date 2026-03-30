function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    if (user === "yahya" && pass === "3333") {                      // Output: Hide login and show shop
       
        document.getElementById('login-container').style.display = 'none';
        document.querySelector('.login-bg-image').style.display = 'none'; // Hide the background image 
        document.getElementById('main-interface').style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function logout() {
    location.reload(); 
}

function orderSuccess(item) {
    alert("Success! Your order for " + item + " has been added to the tray.");
}