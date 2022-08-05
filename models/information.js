const mysql = require("../db");

const {
  RecordNotFoundError,
  UserAlreadyExistError,
  UnauthorizedError,
} = require("../error-types");
const jwt_decode = require("jwt-decode");

const getAllInformation = async () => {
  const result = await mysql.query(`SELECT *  FROM information INNER JOIN user ON user.id = information.user_id`);
  
  return result[0];
};

const getInformationById = async (id) => {
  const result = await mysql.query(`SELECT * FROM information  WHERE id = ? `, [id]);
  return result[0];
};

const getOneByEmail = async (email) => {
  const result = await mysql.query(`SELECT * FROM information WHERE email = ?`, [
    email, 
  ]);
  return result[0];
};


const createOne = async (body) => {
  // const userAlreadyExist = await getOneByEmail(body.email);

  // if (userAlreadyExist.length) {
  //   throw new UserAlreadyExistError();
  // } else {
    
    const data = await mysql.query(`INSERT INTO information SET ?`, [body]);
    const result = await getInformationById(data[0].insertId);
    return result;
  // }
};

module.exports = {
  getAllInformation,
  getInformationById,
  createOne,
  getOneByEmail
};