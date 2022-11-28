const pool = require("../../Config/database");

exports.getEmployee = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM employeedetails WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  