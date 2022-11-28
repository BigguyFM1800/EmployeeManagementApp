const pool = require("../../Config/database");

exports.deleteEmployee = (request, response) => {
    const id = parseInt(request.params.id)
   
    pool.query('DELETE FROM employeedetails WHERE id = $1',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send({message:`Employee deleted with ID: ${id}`})
    })
  }
  
