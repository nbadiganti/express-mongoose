'use strict';
var mongoose = require('mongoose'),
    conversations = mongoose.model('conversations'),
    categories = mongoose.model('categories');

exports.add_new_category = function(req, res) {
    var new_cat = new categories(req.body);
    new_cat.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// get the list of conversation chats
exports.list_all_category = function(req, res) {
    categories.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


// to add new conversation 
exports.add_new_conversation = function(req, res) {
    var new_conv = new conversations(req.body);
    new_conv.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// get the list of conversation chats
exports.list_all_tasks = function(req, res) {
    conversations.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// get the list of conversation chats
exports.list_all_tasks_by_category = function(req, res) {
    console.log(req.body);
    conversations.find({ 'categoryName': req.body.categoryName }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// exports.create_a_task = function(req, res) {
//     var new_task = new conversations(req.body);
//     new_task.save(function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.read_a_task = function(req, res) {
//     conversations.findById(req.params.convId, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.update_a_task = function(req, res) {
//     Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };


// exports.delete_a_task = function(req, res) {
//     Task.remove({
//         _id: req.params.taskId
//     }, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted' });
//     });
// };