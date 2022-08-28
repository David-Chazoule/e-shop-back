require("dotenv").config();
const mysql = require("./db");
const { URL_CLIENT } = process.env.URL_CLIENT;
const express = require("express");
const PORT = process.env.PORT;
const handleRecordNotFoundError = require("./middlewares/handleRecordNotFoundError");
const handleUserAlreadyExistError = require("./middlewares/handleUserAlreadyExistError");
const handleUnauthorizedError = require("./middlewares/handleUnauthorizedError");
const handleInternalServerError = require("./middlewares/handleInternalServerError");

const app = express();
const cors = require("cors");

app.use(cors(URL_CLIENT));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(handleRecordNotFoundError);
app.use(handleUserAlreadyExistError);
app.use(handleUnauthorizedError);
app.use(handleInternalServerError);

require("./routes/routes")(app);

mysql.connect((err) => {
  if (err) {
    console.error("error connecting to the db" + err.stack);
  } else {
    console.log("connected to the db");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
