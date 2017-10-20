'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var conversationsSchema = new Schema({
    categoryName: {
        type: [{
            type: String,
            enum: ['new', 'chessy', 'romantic', 'flirting', 'cute', 'sweet', 'best', 'hot', 'nerdy', 'top50']
        }],
        default: ['new']
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive', 'removed']
        }],
        default: ['active']
    },
    chat: {
        type: [{
            type: String,
            required: 'Kindly enter conversation chat in array'
        }]

    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


var categorySchema = new Schema({

    categoryName: {
        type: String,
        required: 'Kindly enter the categoryName of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: 'Kindly enter the status type'
    },
    categoryType: {
        type: String,
        required: 'Kindly enter the category type'
    },
});

module.exports = mongoose.model('conversations', conversationsSchema);
module.exports = mongoose.model('categories', categorySchema);