let express = require("express");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});