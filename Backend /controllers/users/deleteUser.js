const pool = require("../../Config/database");

exports.deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    console.log({id});
    
    pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
      if (error) {
      throw error
      }
      response.status(200).send({message:`User deleted with ID: ${id}`})
    })
  }
  
  