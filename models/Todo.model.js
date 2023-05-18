const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false, },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };