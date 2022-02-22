import { getUser } from './fetch-utils.js';
const signinButton = document.getElementById('signin-button');
const signupButton = document.getElementById('signup-button');

signinButton.addEventListener('click', () => {
    console.log('signinclick');
    const user = getUser();
    if (!user) {
        location.replace('./signin');
    } else {
        location.replace('./workshops');
    }
});

signupButton.addEventListener('click', () => {
    location.replace('./signup');
});