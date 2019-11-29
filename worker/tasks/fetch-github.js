const fetch = require('node-fetch');
const redisClient = require('redis').createClient();
const { promisify } = require('util');

const baseUrl = 'https://jobs.github.com/positions.json';
const setAsync = promisify(redisClient.set).bind(redisClient);

async function fetchGithub() {
    let page = 0;
    let resultCount;
    const allJobs = [];
    do {
        const res = await fetch(`${baseUrl}?page=${page++}`);
        const jobs = await res.json();
        resultCount = jobs.length;
        allJobs.push(...jobs);
        console.log(`${page}: ${resultCount}`);
    } while (resultCount > 0)
    console.log(allJobs.length);
    await setAsync('github', JSON.stringify(allJobs));
}

module.exports = fetchGithub;
