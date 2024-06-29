const ticket = document.getElementById('ticket');
const markVisitButton = document.getElementById('markVisit');
const visitLog = document.getElementById('visitLog');

let visits = [];

function createTicket() {
    for (let i = 1; i <= 10; i++) {
        const visit = document.createElement('div');
        visit.classList.add('visit');
        visit.textContent = i;
        ticket.appendChild(visit);
    }
}

function markVisit() {
    if (visits.length < 10) {
        const now = new Date();
        visits.push(now);
        updateTicket();
        updateVisitLog();
    } else {
        alert('Your ticket is already full!');
    }
}

function updateTicket() {
    const visitElements = ticket.getElementsByClassName('visit');
    for (let i = 0; i < visits.length; i++) {
        visitElements[i].classList.add('used');
    }
}

function updateVisitLog() {
    visitLog.innerHTML = '<h2>Visit Log</h2>';
    visits.forEach((visit, index) => {
        const logEntry = document.createElement('p');
        logEntry.textContent = `Visit ${index + 1}: ${visit.toLocaleString()}`;
        visitLog.appendChild(logEntry);
    });
}

createTicket();
markVisitButton.addEventListener('click', markVisit);
