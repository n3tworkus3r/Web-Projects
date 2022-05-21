const Supplier = require('../models/supplier')

class SupplierRepository {
    // Добавление поставщика
    async create(supplier) {
        return Supplier.create(supplier);
    }
}

module.exports = new SupplierRepository();