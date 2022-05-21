const OrderRepository  = require('../repository/orderRepository')

class OrderService {
    /*
    async create(product) {
        return await OrderRepository.create(product);
    }

    async delById(productId) {
        return await OrderRepository.delById(productId);
    }

    async editById(productId, productData) {
        return await OrderRepository.editById(productId, productData);
    }

    async getById(supplierId) {
        return await OrderRepository.getById(supplierId)
    }

    async getAll() {
        return await OrderRepository.getAll()
    }
    */
}

module.exports = new OrderService()