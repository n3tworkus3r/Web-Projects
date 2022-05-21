const OrderProduct = require("../models/orderProduct");

class OrderProductRepository {

  /*
    async create(product) {
      return await OrderProduct.create({
        name: product.name
      });
    }

  async editById(productId, productData) {
    return await OrderProduct.update(productData, {
      where: {
        id: productId
      }
    });
  }

  async delById(productId) {
    await OrderProduct.destroy({
      where: {
        id: productId,
      }
    });
  }

  async getAll() {
    return await OrderProduct.findAll({
      attributes: ["id", "name"],
    });
  }

  async getById(supplierId) {
    return await OrderProduct.findOne( {
      attributes: ["id", "name"],
      where: {
        id: supplierId,
      }
    });
  }
  */
}

module.exports = new OrderProductRepository();
