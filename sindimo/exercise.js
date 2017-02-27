var exercise = {};

//  build dataset
// -------------------------------------
var getTemp = function(row) {
    var time = parseInt(row.date);
    var year = Math.floor(time / 100);
    var month = time - (year * 100) - 1; // correct this - it is wrong
    var date = new Date(year, month, 1); // assume its on 1st of the month, this Date object works fine with Google Charts, but not D3
    return [date, Number(row.GISS)];
};

exercise.getDateTempSeries = function() {

    var myData = exercise.data;
    var temperatures = myData.map(getTemp);

    return temperatures; //  complete this using callback to getTemp
};

var run = function run() {
    exercise.dateT = exercise.getDateTempSeries();

    //Google chart needs this format to do scatter plots
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