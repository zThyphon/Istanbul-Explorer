const nodemailer = require("nodemailer");

const sendMail = (receiver,subject,description) =>
{
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "mailingBotAddress",
            pass: "mailingBotApplicationKey",
        }
    });
    
    const mailOptions = {
        from: "mailingBotAddress",
        to: receiver,
        subject: subject,
        text: description
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email: ", error);
        }
      });
};

module.exports = sendMail;