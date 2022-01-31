const mysql = require("../db");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const {
  RecordNotFoundError,
  UserAlreadyExistError,
  UnauthorizedError,
} = require("../error-types");
const jwt_decode = require("jwt-decode");

const getAll = async () => {
  const result = await mysql.query(`SELECT id, name, email  FROM user`);
  if (result[0].length) {
    return result[0];
  } else {
    throw new RecordNotFoundError();
  }
};

const getOneByEmail = async (email) => {
  const result = await mysql.query(`SELECT * FROM user WHERE email = ?`, [
    email,
  ]);
  return result[0];
};

const getOneById = async (id) => {
  const result = await mysql.query(
    `SELECT id, name, email FROM user WHERE id = ?`,
    [id]
  );
  if (result[0].length) {
    return result[0];
  } else {
    throw new RecordNotFoundError();
  }
};

const createOne = async (body) => {
  const userAlreadyExist = await getOneByEmail(body.email);

  if (userAlreadyExist.length) {
    throw new UserAlreadyExistError();
  } else {
    body.password = await hashPassword(body.password);
    const data = await mysql.query(`INSERT INTO user SET ?`, [body]);
    const result = await getOneById(data[0].insertId);
    return result;
  }
};

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
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
  const token = jwt.sign({ userId: userId }, secret);
  return token;
};

const authentication = async (body) => {
  const user = await getOneByEmail(body.email);
  if (!user.length) {
    throw new RecordNotFoundError;
  } else {
    const passwordIsValid = await verifyPassword(
      user[0].password,
      body.password
    );
    if (passwordIsValid) {
      return createToken(user[0].id);
    } else {
      throw new UnauthorizedError();
    }
  }
};

const getUserInfo = async (token) => {
  const decodedToken = jwt_decode(token);
  console.log(decodedToken);
  // const userInfo = await getOneById()
};

module.exports = {
  getOneById,
  createOne,
  getAll,
  authentication,
  getUserInfo,
  getOneByEmail,
};
