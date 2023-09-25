const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;
  
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('❌Всі поля повинні бути заповненні!')    
  } else {
    const loginFormData = {
      [emailInput.name]: emailInput.value,
      [passwordInput.name]: passwordInput.value
    };
    console.log(loginFormData);

      this.reset();
  }
}