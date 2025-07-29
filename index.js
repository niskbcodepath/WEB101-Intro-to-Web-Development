/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [x] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // Change --bg-color based on dark mode state
    if (document.body.classList.contains("dark-mode")) {
        document.documentElement.style.setProperty('--bg-color', '#3e3377');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#a6a0cf');
    }
}

// Step 3: Register a 'click' event listener
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Query for the submit RSVP button
const rsvpButton = document.getElementById('rsvp-button');

// Initialize RSVP count
let count = 3;

// Step 2: Write the callback function to manipulate the DOM
const addParticipant = (event) => {
    // Prevent default behavior
    event.preventDefault();
    
    // Get the name and state from the form
    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    
    // Create a new <p> element for the participant
    const newParticipant = document.createElement('p');
    
    // Set the text content to match existing entries
    newParticipant.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;
    
    // Find the rsvp-participants div
    const participantsDiv = document.querySelector('.rsvp-participants');
    
    // Append the new <p> element to the participants div
    participantsDiv.appendChild(newParticipant);
    
    // Find and remove the existing rsvp-count element
    const oldCount = document.getElementById('rsvp-count');
    oldCount.remove();
    
    // Increment the count
    count = count + 1;
    
    // Create a new <p> element for the count
    const newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = `⭐ ${count} people have RSVP'd to this event!`;
    
    // Append the new count to the participants div
    participantsDiv.appendChild(newCount);
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
    
    let containsErrors = false;
    
    var rsvpInputs = document.getElementById("rsvp-form").elements;
    
    // Loop through all inputs to validate
    for (let i = 0; i < rsvpInputs.length; i++) {
        // Check if the input value is less than 2 characters
        if (rsvpInputs[i].value.length < 2) {
            containsErrors = true;
            rsvpInputs[i].classList.add('error');
        } else {
            rsvpInputs[i].classList.remove('error');
        }
    }
    
    // Validate email for @ symbol
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        containsErrors = true;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
    
    // If no errors, call addParticipant() and clear fields
    if (containsErrors == false) {
        addParticipant(event);
        // Clear form inputs
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
    
}

// Step 3: Register a 'click' event listener
rsvpButton.addEventListener('click', validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/