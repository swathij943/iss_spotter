const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('Error fetching IP address:', error);
    return;
  }

  console.log('IP address:', ip);

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log('Error fetching geo coordinates:', error);
      return;
    }

    console.log('Geo coordinates:', coords);

    fetchISSFlyOverTimes(coords, (error, flyovers) => {
      if (error) {
        console.log('Error fetching ISS flyovers:', error);
        return;
      }

      console.log('ISS flyovers:', flyovers);
    });
  });
});