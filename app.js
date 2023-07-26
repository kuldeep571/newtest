const express = require("express");
const app = express();
const boodyparser = require("body-parser");
const fileupload = require("express-fileupload")
const userrouter = require("./router/userrouter");
const expressSession = require("express-session");
const cookiesParser = require("cookie-parser");
const sessionConfig = {
    secret: 'bogs121311',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        path: '/',
        maxAge: 1000 * 60 * 60 * 60 * 24
    }
};
app.use(expressSession(sessionConfig));
app.use(cookiesParser());

app.use(boodyparser.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");
app.use(fileupload());
app.use("/", userrouter);




const port= 3016;
app.listen(port, function(){
    console.log("server is connected", port);
})