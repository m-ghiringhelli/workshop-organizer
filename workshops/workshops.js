import { logout, getWorkshops } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const workshopsContainer = document.getElementById('workshop-container');
    const workshops = await getWorkshops();
    console.log(workshops);
    workshopsContainer.textContent = '';
    for (let workshop of workshops) {
        const container = document.createElement('div');
        const title = document.createElement('h3');
        const location = document.createElement('h4');
        const description = document.createElement('p');

        container.classList.add('workshop');
        title.textContent = workshop.name;
        location.textContent = workshop.location;
        description.textContent = workshop.description;

        container.append(title, location, description);
        workshopsContainer.append(container);
    }
});
