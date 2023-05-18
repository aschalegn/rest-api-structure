const { Types } = require("mongoose");
const { Todo } = require("../models/Todo.model");
const { User } = require("../models/Users.model");

const addNew = async (req, res) => {
    try {
        const body = req.body;
        const user = res.locals.user;

        body.owner = user._id;

        if (!user.isPremium) {
            return res.status(500).send("Something happend");
        }
        const newTodo = new Todo(body);
        newTodo.id = newTodo._id;
        await newTodo.save();
        //! add push functionality to usrer's todos field
        await User.updateOne({ _id: new Types.ObjectId(user._id) }, { $push: { todos: newTodo } });
        // User.updateOne((error, data)=>{}) 
        res.status(201).send(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something happend");
    }
}


const getTodos = async (req, res) => {
    const { query } = req;
    const perPage = 1;
    console.log(query);
    try {
        const todos = await Todo.find({ isCompleted: query.isCompleted }).skip(0).limit(query.page * perPage).populate("owner");
        return res.status(200).send(todos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Something happend");
    }
}

const updateTodo = async (req, res) => {

}

const deleteTodo = async (req, res) => {

}

module.exports = { addNew, getTodos, updateTodo, deleteTodo }