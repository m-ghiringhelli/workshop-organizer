import { logout, getWorkshops, deleteParticipant } from '../fetch-utils.js';

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
        const title = document.createElement('h3');
        const location = document.createElement('h4');
        const description = document.createElement('p');
        const enrolleeDiv = document.createElement('div');
    
        workshopDiv.classList.add('workshop');
        title.textContent = workshop.name;
        location.textContent = workshop.location;
        description.textContent = workshop.description;
        
        workshopDiv.append(title, location, description);
        workshopsContainer.append(workshopDiv);
    
        for (let enrollee of workshop.enrollees) {
            const person = document.createElement('div');
            const name = document.createElement('p');
            const contact = document.createElement('p');
            
            person.classList.add('enrollee');
            person.addEventListener('click', async () => {
                await deleteParticipant(enrollee.name);
                await displayWorkshops();
            });
            name.textContent = enrollee.name;
            contact.textContent = enrollee.contact;
            person.append(name, contact);
            enrolleeDiv.append(person);
            workshopDiv.append(enrolleeDiv);
        }
    }
}

window.addEventListener('load', async () => {
    displayWorkshops();
});
