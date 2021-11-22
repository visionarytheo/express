const express = require("express");
const path = require("path");

const app = express();
const staticPath = path.join(__dirname, "./public");

//Uses
app.use(express.static(staticPath));

//Routes
//Home
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

//Cruises
app.get('/cruises', (req, res) => {
    res.sendFile(__dirname + "/public/cruises.html")
})

//GT Voyages
app.get('/gt_voyages', (req, res) => {
    res.sendFile(__dirname + "/public/gt_voyages.html")
})

//Contacts
app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + "/public/contacts.html")
})

//Black Friday
app.get('/black', (req, res) => {
    res.sendFile(__dirname + "/public/black.html")
})

app.listen(3000, () => {
    console.log('Sever running on port 3000')
})