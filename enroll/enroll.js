import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';

const enrollForm = document.getElementById('enroll-form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    console.log('clicked');
});

window.addEventListener('load', async () => {
    const selectEl = document.getElementById('workshops');
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        selectEl.append(option);
    }
});

checkAuth();

