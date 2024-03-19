const pool = require("./pool");

exports.createEventsTable = async() => {
    try
    {
        await pool.execute(`CREATE TABLE IF NOT EXISTS events(
            eventID INT NOT NULL AUTO_INCREMENT,
            eventHeader VARCHAR(100),
            eventDateTime VARCHAR(80),
            eventLocation VARCHAR(80),
            eventDescription VARCHAR(255),
            eventImage VARCHAR(100),
            PRIMARY KEY(eventID));`);
    }
    catch(error)
    {
        console.log("DB Error: "+error); 
    }
};

exports.addEvent = async (eventHeader,eventDateTime,eventLocation,eventDescription,eventImage) => 
{
    try
    {
        await pool.execute(
            `INSERT INTO events(eventHeader, eventDateTime, eventLocation,eventDescription, eventImage) VALUES(?,?,?,?,?)`,
            [eventHeader, eventDateTime, eventLocation, eventDescription,eventImage]);

    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
}; 

exports.getEvents = async() => {
    try
    {
        const connection = await pool.getConnection();
        const [events,fields] = await pool.query("SELECT * FROM events");
        connection.release();
        return events;
    }   
    catch(error)
    {
        console.log("DB Error: "+error);
    }
}; 

exports.getEventDetails = async(eventId) => {
    try
    {
        const [events,fields] = await pool.query("SELECT * FROM events WHERE eventID = ?",[eventId]);
        return events[0];
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};


exports.createCommentsTable = async() => {
    try
    {
        await pool.execute(`CREATE TABLE IF NOT EXISTS comments(
            commentID INT NOT NULL AUTO_INCREMENT,
            eventID INT NOT NULL,
            commentAuthor VARCHAR(100),
            commentHeader VARCHAR(100),
            commentDescription VARCHAR(255),
            PRIMARY KEY(commentID));`);
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};

exports.addComment = async (eventId, commentAuthor, commentHeader, commentDescription) => {
    try
    {
        await pool.execute(
            "INSERT INTO comments(eventId, commentAuthor, commentHeader, commentDescription) VALUES(?,?,?,?)", 
            [eventId, commentAuthor, commentHeader, commentDescription]);
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};

exports.getEventCommands = async(eventId) => {
    try
    {
        const [events,fields] = await pool.query("SELECT * FROM comments WHERE eventID = ?",[eventId]);
        return events;
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};

exports.createEventRegistrationTable = async() => {
    try
    {
        await pool.execute(`CREATE TABLE IF NOT EXISTS eventRegistrations(
            registrationID INT NOT NULL AUTO_INCREMENT,
            eventID INT NOT NULL,
            participantFullName VARCHAR(150),
            participantEmail VARCHAR(100),
            participantPhone VARCHAR(15),
            participantAddress VARCHAR(255),
            PRIMARY KEY(registrationID));`);
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};

exports.addEventRegistration = async(eventId, participantName, participantEmail, participantPhone, participantAddress) => {
    try
    {
        await pool.execute (
            "INSERT INTO eventRegistrations(eventID, participantFullName, participantEmail, participantPhone, participantAddress) VALUES(?,?,?,?,?)",
            [eventId, participantName, participantEmail, participantPhone, participantAddress]);
    }
    catch(error)
    {
        console.log("DB Error: "+error);
    }
};