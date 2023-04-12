const express = require("express");
const app = express(); 
const moment = require("moment");


const time = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log("The current Date and Time is: " + time);


app.set("view engine", "ejs");

app.get("/",(req,res) => 
{
    res.render("main.ejs", {time:time})
})

app.listen(2121, () => {
    console.log("Server is running, you better catch it!");
  });
  