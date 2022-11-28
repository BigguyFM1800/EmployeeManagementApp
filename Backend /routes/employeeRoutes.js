const express = require('express') //import express module
const app = express();

// Students routes
const { getAllEmployees} = require("../controllers/employee/getAllEmployees");
const { getEmployee } = require("../controllers/employee/getOneEmployee");
const { addEmployee } = require("../controllers/employee/addEmployee");
const { updateEmployee } = require("../controllers/employee/updateEmployee");
const { deleteEmployee } = require("../controllers/employee/deleteEmployee");
const {deleteAll} = require('../controllers/employee/deleteAll')


app.get('/getAllEmployees',getAllEmployees);
app.get('/getEmployee/:id',getEmployee);
app.delete('/deleteEmployee/:id', deleteEmployee);
app.put('/updateEmployee/:id', updateEmployee);
app.post('/addEmployee',addEmployee);
app.delete('/deleteAll', deleteAll);

module.exports = app;