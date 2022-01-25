const mysql = require("../db");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const getAll = async () => {
  const result = await mysql.query(`SELECT id, name, email  FROM connect`);
  if (result[0].length) {
    return result[0];
  } else {
    throw new Error();
  }
};

const getOneByEmail = async (email) => {
  const result = await mysql.query(`SELECT * FROM connect WHERE email = ?`, [email]);
  return result[0];
};

const getOneById = async (id) => {
  const result = await mysql.query(
    `SELECT id, name, email FROM connect WHERE id = ?`,
    [id]
  );
  if (result[0].length) {
    return result[0];
  } else {
    throw new Error();
  }
};

const createOne = async (body) => {
  const userAlreadyExist = await getOneByEmail(body.email);

  if (userAlreadyExist.length) {
    throw new Error("User already exist");
  } else {
    body.password = await hashPassword(body.password);
    const data = await mysql.query(`INSERT INTO connect SET ?`, [body]);
    const result = await getOneById(data[0].insertId);
    return result;
  }
};

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const verifyPassword = async (hash, password) => {
  try {
    if (await argon2.verify(hash, password)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw new Error();
  }
};

const createToken = (userId) => {
  const token = jwt.sign({ userId }, secret);
  return token;
};

const authentication = async (body) => {
  const user = await getOneByEmail(body.email);
  if (!user.length) {
    throw new Error
  } else {
    const passwordIsValid = await verifyPassword(user[0].password, body.password);
    if (passwordIsValid){
      return createToken(user.id);
    } else {
      throw new Error();
    }
  }
};

module.exports = {
  getOneById,
  createOne,
  getAll,
  authentication,
};
