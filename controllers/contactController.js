const sendMail = require("../mail/sendMail");

exports.renderContactPage = (request,response,next) => {
    return response.render("contact");
};


exports.postContact = (request,response,next) => {
    const {fullNameInput, emailInput, phoneInput, addressInput } = request.body;
    
    const receiver = "mustafacil198@gmail.com"
    const subject = "Istanbul Explorer Contact";
    const description = `
Contact Sender First Name&Last Name: ${fullNameInput}
Contact Sender Email: ${emailInput}
Contact Sender Phone: ${phoneInput}
Contact Sender Address: ${addressInput}`;

    sendMail(receiver,subject,description);

    return response.redirect("/");
};