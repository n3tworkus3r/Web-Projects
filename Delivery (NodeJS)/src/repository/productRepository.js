const Product = require("../models/product");

class ProductRepository {
    async create(product) {
      return await Product.create({
        name: product.name
      });
    }

  async editById(productId, productData) {
    return await Product.update(productData, {
      where: {
        id: productId
      }
    });
  }

  async delById(productId) {
    await Product.destroy({
      where: {
        id: productId,
      }
    });
  }

  async getAll() {
    return await Product.findAll({
      attributes: ["id", "name"],
    });
  }

  async getById(supplierId) {
    return await Product.findOne( {
      attributes: ["id", "name"],
      where: {
        id: supplierId,
      }
    });
  }
}

module.exports = new ProductRepository();
