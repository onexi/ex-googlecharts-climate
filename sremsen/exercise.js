var exercise = {};

//  build dataset
// -------------------------------------

// date format is date(year, month, day)
// getting an integer for the date floor.Number(1888001)/100
// get an integer for the month = year * 100 (then date - that answer)
// could you pull characters out of the string and take it as the year / date
// always need to take into account how date works

var getTemp = function(row) {
    var time = parseInt(row.date);
    var year = Math.floor(time / 100);
    var month = time - (year * 100) - 1; // the month of January is 0
    var date = new Date(year, month, 1); // assume it's on 1st of the month
    return [date, Number(row.GISS)];
};
exercise.getDateTempSeries = function() {
    // added the map function to get the right row?
    return exercise.data.map(getTemp); //  complete this using callback to getTemp
};

var run = function run() {
    exercise.dateT = exercise.getDateTempSeries();

    // google needs a first row
    var firstRow = [{
        label: 'date',
        id: 'date',
        type: 'date'
    }, {
        label: 'temp',
        id: 'temp',
        type: 'number'
    }];

    // google requires 1st row to describe the data
    exercise.dateT.unshift(firstRow);


    var target = document.getElementById('chart_div');
    //var chart = new google.visualization.BarChart(target);
    //var chart = new google.visualization.PieChart(target);
    var chart = new google.visualization.ScatterChart(target);
    drawChart(exercise.dateT, chart);
};