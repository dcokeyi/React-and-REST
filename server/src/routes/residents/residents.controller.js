const fetch = require('node-fetch');
const superagent = require('superagent');

const URL = 'https://welbi.org/api/residents';

function httpGetResidents(req,res) {
    superagent.get(`${URL}`)
    .query({token: "3a20059a-c92f-4d00-a204-28b4508f16d5"})
    .end(function(err, response){
        if(err){
            console.log(err)
        }else{
            return res.json(response.body);
        }
    })
};

async function httpPostResidents(req,res) {
    const response = await superagent.post(`${URL}`)
        .send(req.body) // sends a JSON post body
        .query({token: "3a20059a-c92f-4d00-a204-28b4508f16d5"})
        .set('Content-Type', 'application/json')
        .set('accept', 'json');

        console.log(response.body);
        return res.json(response.body);
}



module.exports = {
    httpGetResidents,
    httpPostResidents,
};



