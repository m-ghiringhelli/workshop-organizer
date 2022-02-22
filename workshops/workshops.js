import { logout, getWorkshops } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const workshopsContainer = document.getElementById('workshop-container');
    const workshops = await getWorkshops();
    workshopsContainer.textContent = '';
    for (let workshop of workshops) {
        const workshopDiv = document.createElement('div');
        const enrolleeDiv = document.createElement('div');
        const title = document.createElement('h3');
        const location = document.createElement('h4');
        const description = document.createElement('p');
    
        workshopDiv.classList.add('workshop');
        title.textContent = workshop.name;
        location.textContent = workshop.location;
        description.textContent = workshop.description;
    
        
        for (let enrollee of workshop.enrollees) {
            const person = document.createElement('p');
            const contact = document.createElement('p');
            
            enrolleeDiv.classList.add('enrollee');
            enrolleeDiv.addEventListener('click', () => {
                console.log('clicked');
            });
            person.textContent = enrollee.name;
            contact.textContent = enrollee.contact;
            enrolleeDiv.append(person, contact);
        }
        
        workshopDiv.append(title, location, description, enrolleeDiv);
        workshopsContainer.append(workshopDiv);
    }
}

window.addEventListener('load', async () => {
    displayWorkshops();
});
