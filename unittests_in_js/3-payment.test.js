const sinon = require('sinon');
const assert = require('assert');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberSpy;

  beforeEach(function() {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
  });

  it('should log the correct total', function() {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    consoleSpy.restore();
  });
});
