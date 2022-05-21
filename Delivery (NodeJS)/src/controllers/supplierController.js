const SupplierService  = require('../services/supplierService');

class SupplierController {

  async addSupplier(req, res) {
    let supplier = {
      name : req.body.name,
      rate : req.body.rate,
      description : req.body.description
    };

    res.send(await SupplierService.create(supplier));
  }
}

module.exports = new SupplierController();