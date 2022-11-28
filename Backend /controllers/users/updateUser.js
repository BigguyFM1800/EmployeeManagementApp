const pool = require("../../Config/database");

exports.updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, password } = request.body
  
    pool.query(
      'UPDATE users SET username = $1, password = $2 WHERE id = $3',
      [username, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send({message:`User modified with ID: ${id}`})
      }
    )
  }

   
  