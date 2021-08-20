const request = require('supertest');
const app = require('../../app');

describe('test POST /launch', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .post('/attend')
        .send({
            residentId: "307416678418874944",
            status: "Active",
        })
        .expect('Content-Type', /json/)
        .expect(200)
    })
})