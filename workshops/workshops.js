import { logout, getWorkshops } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const objects = await getWorkshops();

console.log(objects);