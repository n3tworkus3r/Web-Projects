const Order = require("../models/order");

class OrderRepository {

  /*
    async create(product) {
      return await Order.create({
        name: product.name
      });
    }

  async editById(productId, productData) {
    return await Order.update(productData, {
      where: {
        id: productId
      }
    });
  }

  async delById(productId) {
    await Order.destroy({
      where: {
        id: productId,
      }
    });
  }

  async getAll() {
    return await Order.findAll({
      attributes: ["id", "name"],
    });
  }

  async getById(supplierId) {
    return await Order.findOne( {
      attributes: ["id", "name"],
      where: {
        id: supplierId,
      }
    });
  }
  */
}

module.exports = new OrderRepository();
