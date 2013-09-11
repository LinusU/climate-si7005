var hardware = require('hardware');

console.log("Starting up S17005...");
var climate = require('../').connect(null, 2);

climate.on('connected', function () {
  console.log("Connected to S17005");

  // Loop forever
  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      console.log('Degrees:', temp.toFixed(4) + 'F');
      setTimeout(loop, 300);
    });
  });
});