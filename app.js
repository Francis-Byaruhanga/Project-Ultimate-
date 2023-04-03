const express = require("express");
const {resolve} = require('path');
const app  = express();
const path = require('path');
const {title} = require('process');
const router = express.Router();
const bodyParser = require('body-parser');


//__dirname will resolve to your project folder
app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=>{
    res.render("home")
});

app.get("/contact",(req, res)=>{
    res.render("contact")
});












app.listen(5000, () => console.log("listening on port 5000")); 