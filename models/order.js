const mysql = require("../db");
const moment = require("moment");

const getAllOrderByUser = async (id) => {
  try {
    const [result] = await mysql.query(`SELECT *, op.quantity as productQty FROM tech.order_has_product op LEFT JOIN tech.product p ON op.product_id = p.id LEFT JOIN tech.order o ON op.order_id = o.id Where op.user_id = ? ORDER BY op.order_id ASC`, [id])
  return result.reduce(
    (prev, curr) => {
      const product = {
        productId : curr.product_id,
        quantity: +curr.productQty,
        title: curr.title,
        info1: curr.info1,
        info2: curr.info2,
        info3: curr.info3,
        info4: curr.info4,
        description: curr.description,
        type: curr.type,
        brand: curr.brand,
        price: curr.price,
        image: curr.img
      }
      if(prev.length && prev[prev.length -1].orderId === curr.order_id) {
        prev[prev.length -1].products.push({
          product,
          price: prev[prev.length -1].price + (curr.price*curr.productQty)
        })
      } else {
        prev.push({
          orderId: curr.order_id,
          products: [product],
          price: curr.price * curr.productQty,
          createdAT: moment(curr.createdAT).format(("DD/MM/YYYY"))
        })
      }
      return prev
    }, []
  );
  } catch(e){
    console.log(e)
  }
};

const createOrder = async (id, body) => {
  try {
    const [{insertId}] = await mysql.query(`INSERT INTO tech.order (user_id) VALUES (?)`, [id]);
    await Promise.all(body.map(async elem => {
      await mysql.query(`INSERT INTO tech.order_has_product (order_id, product_id, quantity, user_id) VALUES (?,  ?, ?, ?)`, [insertId, elem.id, elem.quantity, id]);
    }))
    return {
      orderId: insertId
    }
  }
  catch(e) {
    console.log(e)
  }
};

module.exports = {
  getAllOrderByUser,
  createOrder,
}