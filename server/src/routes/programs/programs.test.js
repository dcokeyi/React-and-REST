const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/programs')
        .expect('Content-Type', /json/)
        .expect(200);
    })
})

describe('test POST /launch', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .post('/programs')
        .send({
            name: "PS5",
            location: "Field",
            allDay: true,
            start: "2009-11-12T19:00:00.000Z",
            end: "2009-11-12T20:00:00.000Z",
            isRepeated: true,
            hobbies: [
                    "Debate",
                    "Public Speaking"
                ],
            levelOfCare:[],
            facilitators: [],
            dimension: "500",
            tags: []
        })
        .expect('Content-Type', /json/)
        .expect(200)
    })
})