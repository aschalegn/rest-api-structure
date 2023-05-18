const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }],
});

// userSchema.pre('save', function(){
    
// });

const User = mongoose.model('User', userSchema);

module.exports = { User };