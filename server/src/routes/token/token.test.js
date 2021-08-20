const request = require('supertest');
const app = require('../../app');

describe('test POST /launch', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .post('/token')
        .send({
            key: 'email',
            email: 'ikeridivine2@gmail.com'
        })
        .expect('Content-Type', /json/)
        .expect(200)
    })
})