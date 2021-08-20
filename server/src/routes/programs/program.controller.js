const superagent = require('superagent');

const URL = 'https://welbi.org/api/programs';

function httpGetPrograms(req,res) {
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

async function httpPostPrograms(req,res) {
    const response = await superagent.post(`${URL}`)
        .query({token: "3a20059a-c92f-4d00-a204-28b4508f16d5"})
        .send(req.body) // sends a JSON post body
        .set('Content-Type', 'application/json')
        .set('accept', 'json');

        console.log(response.body);
        return res.json(response.body);
}

module.exports = {
    httpGetPrograms,
    httpPostPrograms
};