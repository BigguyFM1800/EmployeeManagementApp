const express = require('express') //import express module
const app = express();

//users routes
const {login} = require("../controllers/users/login")
const {deleteUser} = require("../controllers/users/deleteUser");
const {getById} = require("../controllers/users/getById");
const {getAll} = require("../controllers/users/getAll");
const {updateUser} = require("../controllers/users/updateUser");
const {register} = require("../controllers/users/register");

app.get('/getAll',getAll);
app.get('/getById/:id',getById);
app.delete('/deleteUser/:id',deleteUser);
app.put('/updateUser/:id',updateUser);
app.post('/login',login);
app.post('/register',register)

module.exports = app;