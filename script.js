document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('successMessage');

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    function validateFullName() {
        const fullName = fullNameInput.value;
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(fullName)) {
            fullNameInput.classList.add('error');
            fullNameError.textContent = 'Invalid full name.';
            return false;
        } else {
            fullNameInput.classList.remove('error');
            fullNameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            emailInput.classList.add('error');
            emailError.textContent = 'Invalid email address.';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }

    function validatePhone() {
        const phone = phoneInput.value;
        const regex = /^\d{10,15}$/;
        if (!regex.test(phone)) {
            phoneInput.classList.add('error');
            phoneError.textContent = 'Invalid phone number.';
            return false;
        } else {
            phoneInput.classList.remove('error');
            phoneError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!regex.test(password)) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Password must be at least 8 characters with one uppercase, one lowercase, and one number.';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordError.textContent = '';
            return true;
        }
    }

    fullNameInput.addEventListener('input', validateFullName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();

        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.style.display = 'block';
            form.reset();
        } else {
            successMessage.style.display = 'none';
        }
    });
});
