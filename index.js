const express = require("express");
const app= express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running`)
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home"); // Render home.ejs
});

app.get("/about", (req, res) => {
    res.render("about"); // Render about.ejs
});


app.post("submit")