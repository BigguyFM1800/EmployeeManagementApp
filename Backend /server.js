const express = require('express') //import express module
const cors = require("cors"); //import cors module
const bodyParser = require('body-parser');
const app = express();
// const router = express.Router();

var corsOptions = {
  origin: "*"
}

require("./Config/dovevn"); //Import your environmental configs

const Pool = require("./Config/database"); // access the database.js
// const { arrayParser } = require('pg-types');

app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const empoloyees = require("./routes/employeeRoutes");
const users = require("./routes/usersRoutes");

const port = process.env.PORT || 5050;

const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host

Pool.connect((error) =>{ // Connect to the Database
   if (error) {
     }
  else {
    console.log("Data logging initialised");
   }

});

app.get("/", (request, response) =>{
    response.status(200).send("Sever Initialized and Online. Ready to take OFF!");
  });

app.use('/api',users); // User endpoint API
app.use('/api', empoloyees);

  app.listen(port, process.env.baseURL,() => {
    console.log(`Here we go, All Engines started at ${port}.`)
  })