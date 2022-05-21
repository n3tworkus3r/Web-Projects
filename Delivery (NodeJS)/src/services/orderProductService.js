const OrderProductRepository  = require('../repository/orderProductRepository')

class OrderProductService {
    /*
    async create(product) {
        return await OrderProductRepository.create(product);
    }

    async delById(productId) {
        return await OrderProductRepository.delById(productId);
    }

    async editById(productId, productData) {
        return await OrderProductRepository.editById(productId, productData);
    }

    async getById(supplierId) {
        return await OrderProductRepository.getById(supplierId)
    }

    async getAll() {
        return await OrderProductRepository.getAll()
    }
    */
}

module.exports = new OrderProductService()