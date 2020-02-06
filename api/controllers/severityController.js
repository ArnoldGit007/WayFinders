'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')

exports.list_all_severities = function (req, res) {
  let sqlQuery = "select * from dbo.[Severity]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};


exports.read_a_severity = function (req, res) {
  if (req.params.severityId) {
    let sqlQuery = `select * from dbo.[Severity] where id = ${req.params.severityId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

