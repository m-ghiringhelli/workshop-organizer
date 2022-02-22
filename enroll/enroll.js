import { 
    checkAuth, 
    logout, 
    getWorkshops,
    enrollUser } from '../fetch-utils.js';

const enrollForm = document.getElementById('enroll-form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    console.log('clicked');
});

enrollForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(enrollForm);
    await enrollUser({
        name: data.get('name'),
        contact: data.get('contact'),
        workshop_id: data.get('workshops')
    });
    enrollForm.reset();
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

