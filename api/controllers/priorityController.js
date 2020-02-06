'use strict';


var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')


exports.list_all_priorties = function (req, res) {
  let sqlQuery = "select * from dbo.[Priority]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_priority = function (req, res) {
  if (req.params.priorityId) {
    let sqlQuery = `select * from dbo.[Priority] where id = ${req.params.priorityId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};
