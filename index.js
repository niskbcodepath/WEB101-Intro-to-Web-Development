/*** Dark Mode ***/
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.documentElement.style.setProperty('--bg-color', '#3e3377');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#a6a0cf');
    }
}

themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***/
const rsvpButton = document.getElementById('rsvp-button');
let count = 3;

const addParticipant = (person) => {
    event.preventDefault();
    
    const newParticipant = document.createElement('p');
    newParticipant.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd.`;
    
    const participantsDiv = document.querySelector('.rsvp-participants');
    participantsDiv.appendChild(newParticipant);
    
    const oldCount = document.getElementById('rsvp-count');
    oldCount.remove();
    
    count = count + 1;
    
    const newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = `⭐ ${count} people have RSVP'd to this event!`;
    
    participantsDiv.appendChild(newCount);
}

/*** Form Validation ***/
const validateForm = (event) => {
    let containsErrors = false;
    
    var rsvpInputs = document.getElementById("rsvp-form").elements;
    
    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        state: rsvpInputs[2].value
    };
    
    if (person.name.length < 2) {
        containsErrors = true;
        rsvpInputs[0].classList.add('error');
    } else {
        rsvpInputs[0].classList.remove('error');
    }
    
    if (person.state.length < 2) {
        containsErrors = true;
        rsvpInputs[2].classList.add('error');
    } else {
        rsvpInputs[2].classList.remove('error');
    }
    
    if (!person.email.includes('@')) {
        containsErrors = true;
        rsvpInputs[1].classList.add('error');
    } else {
        rsvpInputs[1].classList.remove('error');
    }
    
    if (containsErrors == false) {
        addParticipant(person);
        toggleModal(person);
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
}

rsvpButton.addEventListener('click', validateForm);

/*** Modal ***/
let rotateFactor = 0;
let modalImage = document.getElementById('modal-image');

const toggleModal = (person) => {
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('thanks-content-modal');
    
    modal.style.display = 'flex';
    modalContent.querySelector('#modal-text').textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;
    
    let intervalId = setInterval(animateImage, 500);
    
    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 5000);
}

const animateImage = () => {
    if (motionEnabled) {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
    }
}

const closeModal = () => {
    const modal = document.getElementById('thanks-modal');
    modal.style.display = 'none';
}

const closeModalButton = document.getElementById('close-modal-button');
closeModalButton.addEventListener('click', closeModal);

/*** Reduce Motion ***/
let motionEnabled = true;

const reduceMotion = () => {
    motionEnabled = !motionEnabled;
    const reduceMotionButton = document.getElementById('reduce-motion-button');
    reduceMotionButton.textContent = motionEnabled ? 'Reduce Motion' : 'Enable Motion';
    if (!motionEnabled) {
        modalImage.style.transform = 'rotate(0deg)';
    }
}

const reduceMotionButton = document.getElementById('reduce-motion-button');
reduceMotionButton.addEventListener('click', reduceMotion);