'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')


exports.list_all_roles = function (req, res) {
  let sqlQuery = "select * from dbo.[Role]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_role = function (req, res) {
  let sqlQuery = `select * from dbo.[Role] where id = ${req.params.userId}`;
  return requestHandler.handle(req, res, sqlQuery)
};
