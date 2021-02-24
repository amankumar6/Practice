const fetchDailyData = async () => {
    try {
        console.time('total time');
        console.time('fetching data');
        const response = await fetch('https://covid19.mathdro.id/api/daily');
        const fetchedData = await response.json();
        console.timeEnd('fetching data');

        const totalConfirmed = fetchedData.map((data) => ({
            x: data.reportDate.replace(
                /(\d{4})-(\d{2})-(\d{2})/g,
                (_, y, m, d) => [m, d, y].join('/')
            ),
            y: data.totalConfirmed,
        }));

        const totalDeath = fetchedData.map((data) => ({
            x: data.reportDate.replace(
                /(\d{4})-(\d{2})-(\d{2})/g,
                (_, y, m, d) => [m, d, y].join('/')
            ),
            y: data.deaths.total,
        }));

        const totalRecovered = fetchedData.map((data) => ({
            x: data.reportDate.replace(
                /(\d{4})-(\d{2})-(\d{2})/g,
                (_, y, m, d) => [m, d, y].join('/')
            ),
            y: data.recovered.total,
        }));

        // '2020-05-01'.replace((/(\d{4})-(\d{2})-(\d{2})/g), (_, y, m, d) => [+m, +d, y].join('/'))

        let series = [
            {
                name: 'Confirmed',
                points: totalConfirmed,
            },
            {
                name: 'Death',
                points: totalDeath,
            },
        ];

        let condition = false;

        if (condition) {
            series.push({ name: 'Recovered', points: totalRecovered });
        }

        console.time('graph');

        JSC.chart('chartDiv', {
            type: 'line spline',
            legend_visible: false,
            yAxis: [
                {
                    // Options for the default y axis
                    id: 'mainY',
                    scale_interval: 10000000,
                },
                {
                    // Define a secondary axis on the right to host lastPoint ticks.
                    id: 'secondY',
                    defaultTick_enabled: false,
                    scale_syncWith: 'mainY',
                    orientation: 'right',
                },
            ],
            xAxis: {
                crosshair_enabled: true,
                scale_type: 'time',
                scale: {
                    interval: {
                        unit: 'month',
                        multiplier: 1,
                    },
                },
            },
            defaultSeries: {
                defaultPoint_marker: { visible: false, type: 'circle' },
                firstPoint: { marker_visible: true, label_text: '%yValue' },
                lastPoint: {
                    // Add axis ticks for the last point of each series.
                    yAxisTick: {
                        axisId: 'secondY',
                        label_text: '%icon %seriesName',
                    },
                    marker_visible: true,
                    label_text: '%yValue',
                },
            },

            series,

            xAxis_scale_type: 'time',
            defaultAxis: {
                defaultTick_gridLine_visible: false,
                alternateGridFill: 'none',
            },
        });
        console.timeEnd('graph');
        console.timeEnd('total time');
    } catch (err) {
        console.log(err);
    }
};

fetchDailyData();
