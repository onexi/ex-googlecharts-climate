var exercise = {};

//  build dataset
// -------------------------------------
var getTemp = function(row) {
    var time = parseInt(row.date);
    var year = Math.floor(time / 100);
    month = time - (year * 100); // correct this - it is wrong
    var date = new Date(year, month, 1); // assume its on 1st of the month
    return [date, Number(row.GISS)];
};
exercise.getDateTempSeries = function() {
    return []; //  complete this using callback to getTemp
};

var run = function run() {
    exercise.dateT = exercise.getDateTempSeries();

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