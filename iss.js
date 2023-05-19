const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const errorMessage = 'Status Code ${response.statusCode} when fetching IP: ${body}';
      return callback(new Error(errorMessage), null);
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};
module.exports = { fetchMyIP };