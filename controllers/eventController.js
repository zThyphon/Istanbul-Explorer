const dbCommands = require("../database/databaseCommands");
const sendMail = require("../mail/sendMail");

exports.renderEventsPage = async(request,response,next) => {
    const events = await dbCommands.getEvents();
    return response.render("eventsPage",{events});
};

exports.renderEventDetailPage = async(request,response,next) =>{
    const eventId = request.params.eventId;
    const eventDetails = await dbCommands.getEventDetails(eventId);
    const eventComments = await dbCommands.getEventCommands(eventId);
    
    return response.render("eventDetails",{eventDetails,eventComments});
};

exports.renderEventRegisterPage = async (request,response,next) => {
    const eventId = request.params.eventId;
    const eventDetails = await dbCommands.getEventDetails(eventId);

    return response.render("eventRegister",{eventDetails});
};

exports.postEventRegistration = async (request,response,next) => {
    const {
        eventNameInput, 
        eventDateTime, 
        eventLocation, 
        participantNameInput, 
        participantEmailInput, 
        participantPhoneInput, 
        participantAddressInput,
        eventId } = request.body;

    
    await dbCommands.addEventRegistration(eventId, participantNameInput, participantEmailInput, participantPhoneInput, participantAddressInput);
    
    const subject = "Istanbul Explorer Event Registration";
    const description = 
`
You successfully registered to ${eventNameInput}
Event Date & Time: ${eventDateTime}
Event Location: ${eventLocation}
`;
    sendMail(participantEmailInput, subject,description);
    return response.redirect("/");
};