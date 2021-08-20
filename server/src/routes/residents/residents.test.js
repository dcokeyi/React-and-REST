const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/residents')
        .expect('Content-Type', /json/)
        .expect(200);
    })
})

describe('test POST /launch', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .post('/reidents')
        .send({
            id: "",
            name: "Neymar",
            birthDate: "2026-11-20",
            moveInDate: "2009-09-17",
            ambulation: "CANE",
            levelOfCare: "INDEPENDENT",
            firstName: "maz",
            lastName: "James",
            preferredName: "Mazi",
            status: "Active",
            room: "300"
            
        })
        .expect('Content-Type', /json/)
        .expect(200)
    })
})