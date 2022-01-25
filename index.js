require('dotenv').config();
const mysql = require('./db');
const {URL_CLIENT}=process.env.URL_CLIENT;
const express = require('express');
const PORT = process.env.PORT;

const app = express();
const cors = require('cors');

app.use(cors(URL_CLIENT))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes')(app)

mysql.connect((err) => {
  if (err) {
    console.error('error connecting to the db' + err.stack);
  } else {
    console.log('connected to the db');
  }
})

// mysql.promise()

// app.get('/product', (req, res) => {

//   mysql.promise().query(`SELECT * FROM product`)
//     .then(result => {
     
//       return res.status(200).json(result[0])

//     })
//     .catch(err => {
//       console.error(err)
//       res.status(500).send('internal server error')
//     })
// })


// app.get('/product/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = `SELECT * FROM product WHERE id = ?`

//   mysql.promise().query(sql, [id])
//     .then(result => {
//       if (result[0].length) {
//         return res.status(200).json(result[0])
//       } else {
//         res.status(404).send('ressource not found')
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send('internal server error')

//     })

// })



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})