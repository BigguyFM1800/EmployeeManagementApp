const pool = require("../../Config/database");

exports.updateEmployee = (request, response) => {
    const id = parseInt(request.params.id)
    const {firstname, lastname, email, address, phone} = request.body
  
    pool.query(
      'UPDATE employeedetails SET firstname = $1, lastname = $2, email = $3, address = $4, phone = $5 WHERE id = $6',
      [firstname, lastname, email, address, phone, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send({message:`Employee modified with ID: ${id}`})
      }
    )
  }

   
 