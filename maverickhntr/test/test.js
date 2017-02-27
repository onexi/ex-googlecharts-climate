// Testing file for JSON examples
var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');
var data = require("./climateData.json");

describe('JSON Exercises - number of GISS temp points', function() {
    it('Count of temperature points ', function() {
        ex.data = data;
        var dataT = ex.getDateTempSeries();
        var len = dataT.length;
        len.should.equal(1574);
    });
});