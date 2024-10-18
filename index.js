const express = require("express");
const app= express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running`)
})

app.set("view engine", "ejs");
