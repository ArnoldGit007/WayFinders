var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var issueRoute = require('./api/routes/issueRoutes'); //importing route
var loginRoute = require('./api/routes/loginRoutes'); //importing route
var priorityRoute = require('./api/routes/priorityRoutes'); //importing route
var projectRoute = require('./api/routes/projectRoutes'); //importing route
var roleRoute = require('./api/routes/roleRoutes'); //importing route
var severityRoute = require('./api/routes/severityRoutes'); //importing route
var statusRoute = require('./api/routes/statusRoutes'); //importing route
var userRoute = require('./api/routes/userRoutes'); //importing route
var loginRoute = require('./api/routes/loginRoutes');

issueRoute(app); //register the route
loginRoute(app); //register the route
priorityRoute(app); //register the route
projectRoute(app); //register the route
roleRoute(app); //register the route
severityRoute(app); //register the route
statusRoute(app); //register the route
userRoute(app); //register the route
loginRoute(app);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});



app.listen(port);
console.log('todo list RESTful API server started on: ' + port);