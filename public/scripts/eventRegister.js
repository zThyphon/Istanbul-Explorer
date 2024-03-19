const registerForm = document.querySelector("#registerForm");
const eventNameInput = document.querySelector("#eventNameInput");
const eventDateTime = document.querySelector("#eventDateTime");
const eventLocation = document.querySelector("#eventLocation");
const participantNameInput = document.querySelector("#participantNameInput");
const participantEmailInput = document.querySelector("#participantEmailInput");
const participantPhoneInput = document.querySelector("#participantPhoneInput");
const participantAddressInput = document.querySelector("#participantAddressInput");


registerForm.addEventListener("submit", (event) => {
    if (
        eventNameInput.value.trim() === "" ||
        eventDateTime.value.trim() === "" ||
        eventLocation.value.trim() === "" ||
        participantNameInput.value.trim() === "" ||
        participantEmailInput.value.trim() === "" ||
        participantPhoneInput.value.trim() === "" ||
        participantAddressInput.value.trim() === "") 
    {
        event.preventDefault();
        alert("Please enter all registration information.");
    } 
    else 
    {
        alert("Congratulations you successfully registered to event.");
        contactForm.submit();
    }
});