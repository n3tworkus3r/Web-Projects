const ProductSupplierService = require("../services/productSupplierService");

class ProductSupplierController {
  /*
  async createOne(req, res) {
    let product = {
      name: req.body.name
    };

    res.send(await ProductSupplierService.create(product));
  }

  async delById(req, res) {
    await ProductSupplierService.delById(req.params.id);
    res.send("Ok");
  }

  async editById(req, res) {
    let productId = req.params.id;

    let productData = {
      name: req.body.name
    };

    res.send(await ProductSupplierService.editById(productId, productData));
  }

  async getById(req, res, next) {
    try {
      let productId = await ProductSupplierService.getById(req.params.id);
      res.json(productId);
    } catch (err) {
      return next(err);
    }
  }

  async getAll(req, res) {
    let products = await ProductSupplierService.getAll();
    res.json(products);
  }*/
}

module.exports = new ProductSupplierController();
