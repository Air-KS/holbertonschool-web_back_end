const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sun = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
