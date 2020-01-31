'use strict';

// var mongoose = require('mongoose'),
//   Task = mongoose.model('Tasks');
var sql = require('mssql')
console.log(sql)

var config = {
  server: 'wayfinderdatabaseserver.database.windows.net',
  database: 'WayFinderDatabaseDEV',
  user: 'wayfinder',
  password: 'FinderWay@123',
  port: 1433,
  encrypt:true
};

function loadEmployees() {
  debugger

  sql.connect(config, function (err) {
    
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
       
    // query to the database and get the records
    request.query('select * from dbo.[User]', function (err, recordset) {
        
        if (err) console.log(err)
        
        // send records as a response
        console.log(recordset);
        
    });
});

  //4.
  //var dbConn = new sqlServer.Connection(config);
  //5.
  // sqlServer.connect() ().then(function () {
  //     //6.
  //     var request = new sqlServer.Request(dbConn);
  //     //7.
  //     request.query("select * from User").then(function (recordSet) {
  //         console.log(recordSet);

  //         dbConn.close();
  //     }).catch(function (err) {
  //         //8.
  //         console.log(err);
  //         dbConn.close();
  //     });
  // }).catch(function (err) {
  //     //9.
  //     console.log(err);
  // });
}

loadEmployees();

// exports.list_all_tasks = function(req, res) {
// //   Task.find({}, function(err, task) {
// //     if (err)
// //       res.send(err);
// //       let users = [1, 2, 3]
// //     res.json(users);
// //   });
//     let users = [1, 2, 3]
//     res.json(users);    
// };

// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {

//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };