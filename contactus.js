// Helper functions
const showError = (input, label, errorElement, message) => {
    input.classList.add('input-error');
    label.classList.add('label-error');
    errorElement.textContent = message;
};

const clearError = (input, label, errorElement) => {
    input.classList.remove('input-error');
    label.classList.remove('label-error');
    errorElement.textContent = '';
};

// Form submission handler
document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get form elements
    const email = document.getElementById('send-email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('send-email-error');
    const passwordError = document.getElementById('password-error');
    const emailLabel = document.querySelector('label[for="send-email"]');
    const passwordLabel = document.querySelector('label[for="password"]');
    const loader = document.querySelector('.loading-animation');
    let change2 = document.querySelector(".change")
    let isValid = true;

    // Clear previous errors
    clearError(email, emailLabel, emailError);
    clearError(password, passwordLabel, passwordError);

    // Validate email
    if (!email.value.trim()) {
        showError(email, emailLabel, emailError, 'Email cannot be empty!');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        showError(email, emailLabel, emailError, 'Please enter a valid email (e.g., example@mail.com)');
        isValid = false;
    }

    // Validate password
    if (!password.value.trim()) {
        showError(password, passwordLabel, passwordError, 'Password cannot be empty!');
        isValid = false;
    } else if (password.value.length < 8) {
        showError(password, passwordLabel, passwordError, 'Password must be at least 8 characters');
        isValid = false;
    }

    // If valid, submit form
    if (isValid) {
        loader.style.display = 'block';
        change2.style.display = 'none';
        
        setTimeout(() => {
            alert('Registration successful! 🎉');
            e.target.reset();
            loader.style.display = 'none';
            change2.style.display = 'block';
            
            // Reset label styles
            emailLabel.classList.remove('label-error');
            passwordLabel.classList.remove('label-error');
        }, 1500);
    }
});