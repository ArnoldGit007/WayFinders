'use strict';

var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')
exports.validateUserCredentials = function (req, res) {
    const body = req.body;
    if (body && body.Email && body.Password) {
        let sqlQuery = `Select 
            U.*, R.Code AS RoleCode from dbo.[User] U 
            INNER JOIN UserRoleXREF UX
            ON U.Id = UX.UserId
            INNER JOIN Role R
            ON R.Id = UX.RoleId
            WHERE U.Email = '${body.Email.trim()}' and U.Password = '${body.Password.trim()}' ;`;
        requestHandler.handle(sqlQuery)
            .then(data => res.send(data))
            .catch(err => res.send(err))
    } else {
        APIResponse.IsSuccess = false
        APIResponse.ErrorMessage = 'Please provide a valid model'
        res.send(APIResponse)
    }
};
