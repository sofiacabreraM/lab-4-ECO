document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login');
  const registerBtn = document.getElementById('registerBtn');

  
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = 'login'; 
    });
  } else {
    console.error('Login button not found.');
  }

  
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      
      window.location.href = 'register'; 
    });
  } else {
    console.error('Register button not found.');
  }
});
