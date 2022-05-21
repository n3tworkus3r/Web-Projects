const ProductSupplierRepository  = require('../repository/productSupplierRepository')

class ProductSupplierService {
    /*
    async create(product) {
        return await ProductSupplierRepository.create(product);
    }

    async delById(productId) {
        return await ProductSupplierRepository.delById(productId);
    }

    async editById(productId, productData) {
        return await ProductSupplierRepository.editById(productId, productData);
    }

    async getById(supplierId) {
        return await ProductSupplierRepository.getById(supplierId)
    }

    async getAll() {
        return await ProductSupplierRepository.getAll()
    }
    */
}

module.exports = new ProductSupplierService()