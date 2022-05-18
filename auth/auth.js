import { signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    console.log({ email: data.get('email'), password: data.get('password') });
    if (user) {
        location.replace('/');
    }
});