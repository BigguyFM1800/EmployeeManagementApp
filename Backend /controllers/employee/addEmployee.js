const pool = require("../../Config/database");

exports.addEmployee = (req, res) => {
    const {firstname, lastname, email, address, phone} = req.body
  
    pool.query('INSERT INTO employeedetails (firstname, lastname, email, address, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
     [firstname, lastname, email, address, phone], (error, results) => {
      if (error) {
       return res.status(400).json({
         error: "database query error"
       })
      }
      res.status(200).send({message: `Employee added with ID: ${results.rows[0].id}`})
    })
  }
   
 