const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/TaskRoutes');

require('dotenv').config()

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoConnect = async () => {
    try {
        await mongoose.connect(
            // WINDOWS 
            process.env.MONGO_URL
        )
        console.log(`Successfull connection, check port: ${process.env.PORT}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
mongoConnect();


module.exports = app;
