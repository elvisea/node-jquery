const express = require('express');
const HomeController = require('./views/controllers/HomeController');
const IndexController = require('./views/controllers/IndexController');

const app = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.get("/", HomeController.index)

app.get("/about", (request, response) => {
    response.render("pages/about");
})

// API
app.get("/api", HomeController.index)
app.get("/api/home", IndexController.index)

app.listen(8080)
console.log("Server Is Running!");