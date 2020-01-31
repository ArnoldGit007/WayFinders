'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')


exports.list_all_users = function (req, res) {
  let sqlQuery = "select * from dbo.[User]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.create_a_user = function (req, res) {
  let sqlQuery = `INSERT INTO dbo.[User] VALUES('${req.body.username}','${req.body.password}')`;
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_user = function (req, res) {
  let sqlQuery = `select * from dbo.[User] where id = ${req.params.userId}`;
  return requestHandler.handle(req, res, sqlQuery)
};


exports.update_a_user = function (req, res) {
  let sqlQuery = `UPDATE dbo.[User]
  SET password = '${req.body.password}'
  WHERE Id = ${req.params.userId}`;
  return requestHandler.handle(req, res, sqlQuery)
};


exports.delete_a_user = function (req, res) {
  let sqlQuery = `DELETE FROM dbo.[User] WHERE Id = ${req.params.userId}`;
  return requestHandler.handle(req, res, sqlQuery)
};