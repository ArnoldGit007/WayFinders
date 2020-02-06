'use strict';

var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')
exports.validateUserCredentials = function (req, res) {
    const body = req.body;
    if (body && body.Email && body.Password) {
        let sqlQuery = `Select * FROM dbo.[User] WHERE email = '${body.Email.trim()}' and password = '${body.Password.trim()}' ;`;
        requestHandler.handle(sqlQuery)
            .then(data => res.send(data))
            .catch(err => res.send(err))
    } else {
        APIResponse.IsSuccess = false
        APIResponse.ErrorMessage = 'Please provide a valid model'
        res.send(APIResponse)
    }
};
