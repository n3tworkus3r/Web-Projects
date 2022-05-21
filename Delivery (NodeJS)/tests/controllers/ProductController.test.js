const supertest = require('supertest')
const request = supertest('http://localhost:8080');

describe('Product Controller', () => {
    describe('/products', () => {
        it('should return error - unknown name', async () => {
            await request
                .post('/products')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.fRE-qB719FBgh8MhXVHxR1SVR_x6iG6sIwSSbpuJ3GY")
                .send({
                    "name": ""
                })
                .expect(400);
        })
    })
})