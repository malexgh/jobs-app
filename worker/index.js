const CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetch-github');

const job = new CronJob('0 */1 * * * *', function () {
    console.log('Every Minute:', new Date());
    fetchGithub();
});
job.start();
