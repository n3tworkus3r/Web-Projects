const OrderService = require("../services/orderService");

class OrderController {

  /*
  async createOne(req, res) {
    let product = {
      name: req.body.name
    };

    res.send(await OrderService.create(product));
  }

  async delById(req, res) {
    await OrderService.delById(req.params.id);
    res.send("Ok");
  }

  async editById(req, res) {
    let productId = req.params.id;

    let productData = {
      name: req.body.name
    };

    res.send(await OrderService.editById(productId, productData));
  }

  async getById(req, res, next) {
    try {
      let productId = await OrderService.getById(req.params.id);
      res.json(productId);
    } catch (err) {
      return next(err);
    }
  }

  async getAll(req, res) {
    let products = await OrderService.getAll();
    res.json(products);
  }
  */
}

module.exports = new OrderController();
