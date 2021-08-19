const superagent = require('superagent');
const info = require('../../model/token.model');

const URL = "https://welbi.org/api/start";

async function httpGetToken (req, res) {
    const response = await superagent.post(`${URL}`)
        .send(req.body) // sends a JSON post body
        .set('Content-Type', 'application/json')
        .set('accept', 'json');

        console.log(response.body);
        return res.json(response.body);
}



module.exports = {
    httpGetToken
}