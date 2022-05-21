const ProductServiceTest = require('../src/services/productService');

describe('ProductServiceTest', () => {
    describe('Create', () => {
        test('should catch error - unknown name', async () => {
            let product = {
                "name": ""
            }
            await expect(ProductServiceTest.Create(product)).rejects.toThrow();
        })
    })
})
