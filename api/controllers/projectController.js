'use strict';

var requestHandler = require('../Utilities/requestHandler')

exports.list_all_projects = function (req, res) {
  let sqlQuery = "select * from dbo.[Project]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.read_a_project = function (req, res) {
  let sqlQuery = `select * from dbo.[Project] where id = ${req.params.projectId}`;
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.create_a_project = function (req, res) {
  const body = req.body
  if (body && body.Name && body.Description && body.UserId) {
    let sqlQuery = `INSERT INTO dbo.[Project] 
                      ( Name,
                        Description,
                        CreatedBy,
                        ModifiedBy
                      ) 
                    VALUES (
                      '${body.Name.trim()}',
                      '${body.Description.trim()}',
                       ${body.UserId},
                       ${body.UserId}
                    )`;
    requestHandler.handle(sqlQuery, {
      QueryType: 'INSERT',
      TableName: 'dbo.[Project]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.update_a_project = function (req, res) {
  const body = req.body
  if (req.params.projectId && body && body.Name && body.Description && body.UserId) {
    let sqlQuery = `UPDATE dbo.[Project]
                    SET Name = '${body.Name.trim()}',
                    Description = '${body.Description.trim()}', 
                    ModifiedBy = ${body.UserId}
                    WHERE Id = ${req.params.projectId} `;
    requestHandler.handle(sqlQuery, {
      QueryType: 'UPDATE',
      TableName: 'dbo.[Project]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.assign_developers = function (req, res) {
  const body = req.body
  if (body && body.ProjectId && body.UserId && body.DeveloperIdList.length) {
    let sqlQuery = ``;
    for (let index = 0; index < body.DeveloperIdList.length; index++) {
      const developerId = body.DeveloperIdList[index];
      sqlQuery += `${(index > 0) ? ';' : ' '} INSERT INTO dbo.[ProjectUserXREF]
      ( ProjectId,
        UserId,
        CreatedBy,
        ModifiedBy
      ) 
    VALUES (
       ${body.ProjectId},
       ${developerId},
       ${body.UserId},
       ${body.UserId}
    )`;
    }
    requestHandler.handle(sqlQuery, {
      QueryType: 'INSERT',
      TableName: 'dbo.[ProjectUserXREF]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.assign_testers = function (req, res) {
  const body = req.body
  if (body && body.ProjectId && body.UserId && body.TesterIdList.length) {
    let sqlQuery = ``;
    for (let index = 0; index < body.TesterIdList.length; index++) {
      const testerId = body.TesterIdList[index];
      sqlQuery += `${(index > 0) ? ';' : ' '} INSERT INTO dbo.[ProjectUserXREF]
      ( ProjectId,
        UserId,
        CreatedBy,
        ModifiedBy
      ) 
    VALUES (
       ${body.ProjectId},
       ${testerId},
       ${body.UserId},
       ${body.UserId}
    )`;
    }
    requestHandler.handle(sqlQuery, {
      QueryType: 'INSERT',
      TableName: 'dbo.[ProjectUserXREF]'
    })
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.get_working_developers = function (req, res) {
  if (req.params.projectId) {
    let sqlQuery = `SELECT UR.* from [User] UR
                    INNER JOIN [ProjectUserXREF] PUX ON PUX.UserId = UR.Id
                    INNER JOIN [UserRoleXREF] URX ON UR.id = URX.UserId
                    INNER JOIN [Role] RL ON RL.Id = URX.RoleId
                    WHERE RL.Code = 'DEVELOPER' AND PUX.ProjectId = ${req.params.projectId} `;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.get_working_testers = function (req, res) {
  if (req.params.projectId) {
    let sqlQuery = `SELECT UR.* from [User] UR
                    INNER JOIN [ProjectUserXREF] PUX ON PUX.UserId = UR.Id
                    INNER JOIN [UserRoleXREF] URX ON UR.id = URX.UserId
                    INNER JOIN [Role] RL ON RL.Id = URX.RoleId
                    WHERE RL.Code = 'TESTER' AND PUX.ProjectId = ${req.params.projectId} `;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};
