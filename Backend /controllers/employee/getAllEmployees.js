const pool = require("../../Config/database");

exports.getAllEmployees = (request, response) => {
    pool.query('SELECT * FROM employeedetails ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

   