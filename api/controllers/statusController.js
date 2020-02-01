'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')


exports.list_all_status = function (req, res) {
  let sqlQuery = "select * from dbo.[Status]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_status = function (req, res) {
  let sqlQuery = `select * from dbo.[Status] where id = ${req.params.statusId}`;
  return requestHandler.handle(req, res, sqlQuery)
};
