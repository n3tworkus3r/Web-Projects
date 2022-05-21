const ProductRepository  = require('../repository/productRepository')

class ProductService {
    async create(product) {
        return await ProductRepository.create(product);
    }

    async delById(productId) {
        return await ProductRepository.delById(productId);
    }

    async editById(productId, productData) {
        return await ProductRepository.editById(productId, productData);
    }

    async getById(supplierId) {
        return await ProductRepository.getById(supplierId)
    }

    async getAll() {
        return await ProductRepository.getAll()
    }
}

module.exports = new ProductService()