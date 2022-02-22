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

        container.classList.add('workshop');
        title.textContent = workshop.name;
        
        container.append(title);
        workshopsContainer.append(container);
    }
});
