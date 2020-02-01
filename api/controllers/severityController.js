'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')


exports.list_all_severities = function (req, res) {
  let sqlQuery = "select * from dbo.[Severity]";
  return requestHandler.handle(req, res, sqlQuery)
};


exports.read_a_severity = function (req, res) {
  let sqlQuery = `select * from dbo.[Severity] where id = ${req.params.severityId}`;
  return requestHandler.handle(req, res, sqlQuery)
};

