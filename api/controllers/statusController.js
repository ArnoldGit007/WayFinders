'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')

exports.list_all_status = function (req, res) {
  let sqlQuery = "select * from dbo.[Status]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_status = function (req, res) {
  if (req.params.statusId) {
    let sqlQuery = `select * from dbo.[Status] where id = ${req.params.statusId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};
