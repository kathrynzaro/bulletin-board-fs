import { signInUser, signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    console.log({ email: data.get('email'), password: data.get('password') });
    if (user) {
        location.replace('/');
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/');
    }
});


