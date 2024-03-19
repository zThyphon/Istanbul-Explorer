const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pageRoutes = require("./routes/pageRoutes");
const eventRoutes = require("./routes/eventRoutes");
const contactRoutes = require("./routes/contactRoutes");
const port = 8080;
const dbCommands = require("./database/databaseCommands");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use("/",pageRoutes);
app.use("/events",eventRoutes);
app.use("/contact",contactRoutes);
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));
app.use(express.static("public"));

app.listen(port,async ()=>{
    try
    {
        console.log("Server Started");
        await dbCommands.createEventsTable();
        await dbCommands.createCommentsTable();
        console.log("Connected to database");

        await dbCommands.createEventRegistrationTable();

    }
    catch(error)
    {
        console.log("Server couldn't started");
        console.log("Error: "+error);
    }
});