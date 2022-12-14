const express = require("express");
const path = require('path');
require("dotenv").config(); // external module to read .env
const routes = require("./routes"); // ./ because written module

const app = express();

app.use(function(req,res, next){
        console.log(req.method, req.url);
        next();
    });

app.use(express.static(path.join(__dirname,"public"))); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",routes); //subset url

const server = app.listen(process.env.port, function(){
    console.log(process.env.SERVER_LISTEN_MESSAGE+server.address().port);
});