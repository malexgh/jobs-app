const express = require('express');
const app = express();
const redisClient = require('redis').createClient();
const { promisify } = require('util');

const port = 3333;
const getAsync = promisify(redisClient.get).bind(redisClient);

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //CORS
    res.send(jobs);
});

app.listen(port, () =>
    console.log(`Server running. http://localhost:${port}`)
);
