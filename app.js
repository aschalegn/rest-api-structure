const express = require('express');
const cors = require('cors');
// const userRouter = require('./routes/user.routes')
const { routes } = require('./routes')


const app = express();
app.use(express.json());


app.use("/api/v1/users", routes.users);
app.use("/api/v1/todos", routes.todos);


module.exports = { app }