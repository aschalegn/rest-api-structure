const { User } = require("../models/Users.model");
const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
    try {
        const body = req.body;
        const newUser = new User(body);
        newUser.id = newUser._id;
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something happend");
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send("Please enter");
        }
        const user = await User.findOne({ email });
        if (user) {
            const token = generateToken(user);
            console.log(token);
            return res.status(200).send({ token, user });
        }
        return res.status(401).send("Please enter");
    } catch (error) {
        console.log(error);
        return res.status(400).send("Please enter");
    }
}


const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).populate("todos");
        res.status(200).send(users)
    } catch (error) {

    }
}


module.exports = { register, getUsers, logIn }