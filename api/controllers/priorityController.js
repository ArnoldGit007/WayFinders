'use strict';


var requestHandler = require('../Utilities/requestHandler')

exports.list_all_priorties = function (req, res) {
  let sqlQuery = "select * from dbo.[Priority]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_priority = function (req, res) {
  let sqlQuery = `select * from dbo.[Priority] where id = ${req.params.priorityId}`;
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};
