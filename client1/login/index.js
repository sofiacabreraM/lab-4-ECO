document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login');

  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      
      if (!username || !password) {
        alert('Please fill in both fields.');
        return;
      }

      try {
        const response = await fetch('http://localhost:5052/login', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            window.location.href = 'http://localhost:5052/create-post'; 
          } else {
            alert('Login failed: ' + result.message);
          }
        } else {
          alert('Server error: ' + response.status);
        }
      } catch (error) {
        alert('Error in request: ' + error.message);
      }
    });
  } else {
    console.error('Login button not found.');
  }
});
