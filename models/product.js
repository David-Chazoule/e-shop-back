const mysql = require('../db');

const getAllProduct = async () => {
    console.log("coucouu david le bg")
  const result = await mysql.query(`SELECT * FROM product`);
    return result[0]
}

const getProductById = async (id) => {
  const result = await mysql.query(`SELECT * FROM product WHERE id = ?`, [id]);
  return result[0]
}


module.exports = {
    getAllProduct,
    getProductById
}