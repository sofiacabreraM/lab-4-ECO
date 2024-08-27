document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
  
    if (registerBtn) {
      registerBtn.addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
  
     
        if (!username || !name || !password) {
          alert('Please fill in all fields.');
          return;
        }
  
        try {
          const response = await fetch('/register' ,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, name, password })
          });
  
          if (response.ok) {
            const result = await response.json();
            if (result.success) {
              alert('Registration successful!');
              window.location.href = 'http://localhost:5052'; 
            } else {
              alert('Registration failed: ' + result.message);
            }
          } else {
            alert('Server error: ' + response.status);
          }
        } catch (error) {
          alert('Error in request: ' + error.message);
        }
      });
    } else {
      console.error('Register button not found.');
    }
  });
  