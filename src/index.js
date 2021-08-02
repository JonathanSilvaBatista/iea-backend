const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://iea:1234@cluster0.xtfiw.mongodb.net/iea?retryWrites=true&w=majority', {
//mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}),

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);