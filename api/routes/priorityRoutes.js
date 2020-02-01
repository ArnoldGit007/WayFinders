'use strict';
module.exports = function (app) {
  var priorityController = require('../controllers/priorityController');

  //todoList Routes
  app.route('/priority')
    .get(priorityController.list_all_priorties);


  app.route('/priority/:priorityId')
    .get(priorityController.read_a_priority)

};