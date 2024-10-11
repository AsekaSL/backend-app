const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUser()
        .then(response => 
            res.send(response)
        )
        .catch(error => 
            console.log(error)
        );
});

app.post('/adduser', (req, res) => {
    controller.addUser(req.body)
        .then(response => 
            res.send(response)
        )
        .catch(error => 
            console.log(error)
        );
});

app.put('/updateuser', (req, res) => {
    controller.updateUser(req.body)
        .then(response => 
            res.send(response)
        )
        .catch(error => 
            console.log(error)
        );
});

app.delete('/deleteuser', (req, res) => {
    controller.deleteUser(req.query.id)
        .then(response => 
            res.send(response)
        )
        .catch(error => 
            console.log(error)
        );
});

app.get('*', (req, res) => {
    res.send({error: '404 Page not found'});
});


module.exports = app;