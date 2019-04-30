var express = require("express");

var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// in production we are rendering build files
app.use(express.static("client/build"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/controllers');
app.use('/', routes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
} )

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});