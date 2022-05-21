const ProductSupplier = require("../models/productSupplier");

class ProductSupplierRepository {

  /*
    async create(product) {
      return await Product.create({
        name: product.name
      });
    }

  async editById(productId, productData) {
    return await ProductSupplier.update(productData, {
      where: {
        id: productId
      }
    });
  }

  async delById(productId) {
    await ProductSupplier.destroy({
      where: {
        id: productId,
      }
    });
  }

  async getAll() {
    return await ProductSupplier.findAll({
      attributes: ["id", "name"],
    });
  }

  async getById(supplierId) {
    return await ProductSupplier.findOne( {
      attributes: ["id", "name"],
      where: {
        id: supplierId,
      }
    });
  }
  */
}

module.exports = new ProductSupplierRepository();
