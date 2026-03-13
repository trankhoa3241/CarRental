// Simple JavaScript for form validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;

            if (!username || !password) {
                alert('Vui lòng nhập đầy đủ thông tin!');
                e.preventDefault();
                return;
            }

            // For demo purposes, just show an alert
            alert('Đăng nhập thành công! (Demo)');
            e.preventDefault();
        });
    }
});