'use strict';

var requestHandler = require('../Utilities/requestHandler')

exports.validateUserCredentials = function (req, res) {
    let sqlQuery = `Select * FROM dbo.[User] WHERE email = '${req.body.email.trim()}' and password = '${req.body.password.trim()}'`;
    requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};
