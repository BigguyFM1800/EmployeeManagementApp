const pool = require("../../Config/database");

exports.deleteAll = (request, response) => {
    
    pool.query('DELETE FROM employeedetails', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send({message:`All Employees deleted`})
    })
  }
  
