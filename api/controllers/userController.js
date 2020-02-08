'use strict';

var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')

exports.list_all_users = function (req, res) {
  let sqlQuery = "select * from dbo.[User]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.create_a_user = function (req, res) {
  const body = req.body;
  if (body && body.FirstName && body.LastName && body.Email && body.Password) {
    let sqlQuery = `INSERT INTO dbo.[User] 
                      ( 
                        FirstName,
                        LastName,
                        Email,
                        Password,
                        CreatedBy,
                        ModifiedBy
                      ) 
                    VALUES (
                      '${body.FirstName.trim()}',
                      '${body.LastName.trim()}',
                      '${body.Email.trim()}',
                      '${body.Password.trim()}',
                      1,
                      1
                    )`;
    requestHandler.handle(sqlQuery, {
      QueryType: 'INSERT',
      TableName: 'dbo.[User]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.activate_a_user = function (req, res) {
  const body = req.body;
  if (body && body.RoleId && body.UserId) {
    let sqlQuery = ` UPDATE dbo.[User] SET IsActivated = 1 WHERE Id = ${body.UserId} ;
                     INSERT INTO dbo.[UserRoleXREF] (UserId, RoleId, CreatedBy, ModifiedBy)
                     VALUES ( ${body.UserId}, ${body.RoleId}, 1, 1 )`;

    requestHandler.handle(sqlQuery, {
      QueryType: 'INSERT',
      TableName: 'dbo.[User]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};
exports.read_a_user = function (req, res) {
  if (req.params.userId) {
    let sqlQuery = `select * from dbo.[User] where id = ${req.params.userId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.get_all_inactivated_user = function (req, res) {
  let sqlQuery = `select * from dbo.[User] where IsActivated = 0`;
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};


exports.get_user_by_role = function (req, res) {
  if (req.params.userRole) {
    let sqlQuery = `select UR.* from [User] UR
    INNER JOIN [UserRoleXREF] URX
    ON UR.id = URX.UserId
    INNER JOIN [Role] RL
    ON RL.Id = URX.RoleId
    WHERE RL.Code = '${req.params.userRole}'`;

    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};


exports.update_a_user = function (req, res) {
  const body = req.body;
  if (req.params.userId && body && body.Password) {
    let sqlQuery = `UPDATE dbo.[User]
                    SET password = '${req.body.Password}'
                    WHERE Id = ${req.params.userId}`;

    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))

  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.delete_a_user = function (req, res) {
  if (req.params.userId) {
    let sqlQuery = `DELETE FROM dbo.[User] WHERE Id = ${req.params.userId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};