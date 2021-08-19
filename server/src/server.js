const http = require('http');

const app = require('./app');
// const { httpGetToken } = require('./routes/token/token.controller');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);


server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}..`)
});