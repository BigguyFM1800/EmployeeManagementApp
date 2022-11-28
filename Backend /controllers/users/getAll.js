const pool = require("../../Config/database");

exports.getAll = (request, response) => {

    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    
  }

   
  