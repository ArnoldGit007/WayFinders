'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')
exports.list_all_roles = function (req, res) {
  let sqlQuery = "select * from dbo.[Role]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_role = function (req, res) {
  if (req.params.roleId) {
    let sqlQuery = `select * from dbo.[Role] where id = ${req.params.roleId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};
