const SupplierRepository  = require('../repository/supplierRepository')

class SupplierService {
    async create(supplier) {
        return await SupplierRepository.create(supplier)
    }
}

module.exports = new SupplierService()