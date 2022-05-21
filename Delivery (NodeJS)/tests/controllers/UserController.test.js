const app = require('./../../src/loader/index');
const supertest = require('supertest')
const request = supertest('http://localhost:8080');

describe('UserController', () => {
    describe('/users/login', () => {
        it('should authorize account', async () => {
            await request
                .post('/users/login')
                .send({
                    login: "user1",
                    password: "Ps999"
                })
                .expect(200);
        })
    })

    describe('/users', () => {
        it('should get all users', async () => {
            await request
                .get('/users')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.fRE-qB719FBgh8MhXVHxR1SVR_x6iG6sIwSSbpuJ3GY")
                .expect(200);
        })
    })

    describe('/users', () => {
        it('should get user by id', async () => {
            await request
                .get('/users/1')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.fRE-qB719FBgh8MhXVHxR1SVR_x6iG6sIwSSbpuJ3GY")
                .expect(200);
        })
    })
})