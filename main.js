const express = require('express');
const mongoose = require('mongoose');
const Data = require('./data');
const app = express();
const PORT = 5000;

const db = mongoose.connect('mongodb://hossain:hossain24@ds139614.mlab.com:39614/todo', () => {
    console.log('Database is connected');
});



app.get('/api/users', (req, res, next) => {
    const users = [
        { id: 1, firstName: "John", lastName: "Snow" },
        { id: 2, firstName: "Jason", lastName: "Hopkin" },
        { id: 3, firstName: "Jonson", lastName: "Kim" }
    ]

    res.json(users);
});

app.get('/db/users', (req, res, next) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, err: error });
        return res.json({ success: true, data: data });
    });
})

app.listen(PORT, () => {
    console.log(`The server is listening on ` + PORT);
});