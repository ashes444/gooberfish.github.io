window.onload = function() {
    var loginForm = document.getElementById('login-form');
    var mainSection = document.getElementById('main-section');
    var message = document.getElementById('message');
    var fishTank = document.getElementById('fish-tank');

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        document.getElementById('login-section').style.display = 'none';
        mainSection.style.display = 'block';

        setTimeout(function() {
            message.style.display = 'block';
        }, 5000);

        setTimeout(function() {
            mainSection.style.display = 'none';
            fishTank.style.display = 'block';
        }, 10000);
    };
}