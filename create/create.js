import { createPost, checkAuth } from '../fetch-utils.js';

checkAuth();

const form = document.getElementById('new-post');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        author: data.get('author'),
    };
    const response = await createPost(newPost);
    console.log(response);
    location.replace('/');
});
