'use strict';


var requestHandler = require('../Utilities/requestHandler')

exports.list_all_priorties = function (req, res) {
  let sqlQuery = "select * from dbo.[Priority]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_priority = function (req, res) {
  let sqlQuery = `select * from dbo.[Priority] where id = ${req.params.priorityId}`;
  return requestHandler.handle(req, res, sqlQuery)
};
