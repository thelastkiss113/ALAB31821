const express = require("express");
const app= express();
const PORT = 3000;

//Part One
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home"); // Render home.ejs
});

app.get("/about", (req, res) => {
    res.render("about"); // Render about.ejs
});

app.get("/contact", (req, res) => {
    const name = "Name";
    res.render("contact", {name});
});


app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Response Sent")
});

//start server

app.listen(PORT, () => {
    console.log(`Server is running`);
})

//////////////////////////////////////
// Part Two: Middleware
//////////////////////////////////////

const morgan = require("morgan");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'));


//Middleware log request data
const requestLogger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); 
};

app.use(requestLogger);

////////////////////////////////////////
//Part Three: Exploring Response Options
////////////////////////////////////////

app.use(express.static('public'));

//image file download

app.get("/download", (req, res) => {
    const file = `${__dirname}/public/sunflower.jpg`; 
    res.download(file); 
});

app.use(express.static('styles'));