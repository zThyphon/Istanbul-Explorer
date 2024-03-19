const contactForm = document.querySelector("#contactForm");
const fullNameInput = document.querySelector("#fullNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const addressInput = document.querySelector("#addressInput");

contactForm.addEventListener("submit", (event) => {
    if (
        fullNameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        addressInput.value.trim() === "") 
    {
        event.preventDefault();
        alert("Please enter all contact information.");
    } 
    else 
    {
        alert("Contact mail has been sent to website admin.");
        contactForm.submit();
    }
});