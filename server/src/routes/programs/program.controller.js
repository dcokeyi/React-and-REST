const fetch = require('node-fetch');

const URL = 'https://welbi.org/api/programs?token=3a20059a-c92f-4d00-a204-28b4508f16d5';

function httpGetPrograms(req,res) {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(data => res.json(data))
    .catch(err => console.log("error"))
};

module.exports = {
    httpGetPrograms
};