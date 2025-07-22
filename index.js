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

// Step 3: Add a click event listener to the submit RSVP button
rsvpButton.addEventListener('click', addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/