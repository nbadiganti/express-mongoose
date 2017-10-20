'use strict';
module.exports = function(app) {
    var pickLinesList = require('../controllers/tinderController');

    // todoList Routes
    // app.route('/tasks')
    //     .get(pickLinesList.list_all_tasks)
    //     .post(pickLinesList.create_a_task);

    app.route('/addCategory')
        .post(pickLinesList.add_new_category);

    app.route('/getAllCategories')
        .get(pickLinesList.list_all_category);

    app.route('/addConversation')
        .post(pickLinesList.add_new_conversation);

    app.route('/getAllConversations')
        .get(pickLinesList.list_all_tasks);

    app.route('/getConversationsByCategory')
        .post(pickLinesList.list_all_tasks_by_category);

    // app.route('/tasks/:taskId')
    //     .get(pickLinesList.read_a_task)
    //     .put(pickLinesList.update_a_task)
    //     .delete(pickLinesList.delete_a_task);
};