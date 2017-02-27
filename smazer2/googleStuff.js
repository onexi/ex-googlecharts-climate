function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//  draw graph
// -------------------------------------
google.load("visualization", "1", { packages: ["corechart"] });

function drawChart(dataset, chartType, target) {

    var data = google.visualization.arrayToDataTable(dataset);
    var options = {
        title: 'Climate Temperature Anomaly',
        series: {
            0: { type: "scatter" }
        },

        vAxis: { minValue: -1, maxValue: 1 },

        trendlines: {
            0: {
                color: 'purple',
                lineWidth: 10,
                opacity: 0.2,
                type: 'polynomial',
                degree: 1,
                showR2: true,
                visibleInLegend: true,
            }
        }
    };

    chartType.draw(data, options);
}