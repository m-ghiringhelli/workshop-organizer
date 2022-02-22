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

// const signUpForm = document.getElementById('sign-up');
// const signUpEmail = document.getElementById('sign-up-email');
// const signUpPassword = document.getElementById('sign-up-password');

// if user currently logged in, redirect
// redirectIfLoggedIn();

// signUpForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signupUser(signUpEmail.value, signUpPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });

// signInForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });
