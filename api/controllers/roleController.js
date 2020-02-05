'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')


exports.list_all_roles = function (req, res) {
  let sqlQuery = "select * from dbo.[Role]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_role = function (req, res) {
  let sqlQuery = `select * from dbo.[Role] where id = ${req.params.roleId}`;
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};
