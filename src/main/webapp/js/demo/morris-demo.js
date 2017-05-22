$(function() {

    Morris.Line({
        element: 'morris-one-line-chart',
            data: [
                { year: '2008', value: 5 },
                { year: '2009', value: 10 },
                { year: '2010', value: 8 },
                { year: '2011', value: 22 },
                { year: '2012', value: 8 },
                { year: '2014', value: 10 },
                { year: '2015', value: 5 }
            ],
        xkey: 'year',
        ykeys: ['value'],
        resize: true,
        lineWidth:4,
        labels: ['Value'],
        lineColors: ['#1ab394'],
        pointSize:5,
    });



    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{ label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 } ],
        resize: true,
        colors: ['#87d6c6', '#54cdb4','#1ab394'],
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{ y: '2006', a: 60, b: 50 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#1ab394', '#cacaca'],
    });

    Morris.Line({
        element: 'morris-line-chart',
        data: [{ y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 } ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true,
        lineColors: ['#54cdb4','#1ab394'],
    });

});
