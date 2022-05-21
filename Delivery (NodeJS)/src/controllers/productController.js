const ProductService = require("../services/productService");

class ProductController {
  async createOne(req, res) {
    let product = {
      name: req.body.name
    };

    res.send(await ProductService.create(product));
  }

  async delById(req, res) {
    await ProductService.delById(req.params.id);
    res.send("Ok");
  }

  async editById(req, res) {
    let productId = req.params.id;

    let productData = {
      name: req.body.name
    };

    res.send(await ProductService.editById(productId, productData));
  }

  async getById(req, res, next) {
    try {
      let productId = await ProductService.getById(req.params.id);
      res.json(productId);
    } catch (err) {
      return next(err);
    }
  }

  async getAll(req, res) {
    let products = await ProductService.getAll();
    res.json(products);
  }
}

module.exports = new ProductController();
