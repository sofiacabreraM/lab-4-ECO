document.addEventListener('DOMContentLoaded', () => {
  const createPostForm = document.getElementById('createPostForm');

  createPostForm.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(createPostForm);
    try {
      const response = await fetch('http://localhost:5052/create-post', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Post submitted successfully!');
        displayPosts(); 
      } else {
        alert('Failed to submit post');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('An error occurred while submitting the post');
    }
  });

  displayPosts(); 
});

async function displayPosts() {
  try {
    const response = await fetch('http://localhost:5052/posts');
    if (response.ok) {
      const posts = await response.json();
      const postsContainer = document.getElementById('postsContainer');
      postsContainer.innerHTML = ''; 
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
        `;
        postsContainer.appendChild(postElement);
      });
    } else {
      console.error('Error fetching posts:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
