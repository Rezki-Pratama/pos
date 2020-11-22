import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChartFull() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                labelColor: '#285e61',
                data: [1,2,1,3,5],
                borderColor: ['#e2e8f0'],
                backgroundColor: ['rgba(29, 138, 137, 0.7)'],
                pointBackgroundColor: '#285e61',
                pointBorderColor: '#e2e8f0',
                pointBorderWidth: 5
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1,3,2,5,2],
                borderColor: ['#e2e8f0'],
                backgroundColor: ['rgba(29, 138, 137, 0.7)'],
                pointBackgroundColor: '#285e61',
                pointBorderColor: '#e2e8f0',
                pointBorderWidth: 5
            }
        ]
    }

    const option = {
        legend: {
            labels: {
                fontColor: "#285e61",
                fontSize: 13
            }
        },
        animation: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        title: {
            display: true,
            text: 'Line Chart',
            fontColor: '#285e61',
            fontSize: 14
        },
        scales: {
            yAxes: [
                {
                    min: 0,
                    max : 6,
                    stepSize: 1,
                    ticks: {
                        fontColor: "#285e61",
                        fontStyle: "bold",
                        fontSize: 15,
                        stepSize: 1,
                        beginAtZero: true
                        
                    },
                }
            ],
            xAxes: [
                {
                    min: 0,
                    max : 6,
                    stepSize: 1,
                    ticks: {
                        fontColor: "#285e61",
                        fontStyle: "bold",
                        fontSize: 15,
                        stepSize: 1,
                        beginAtZero: true
                    },
                }
            ]
        }
    }

    return (
        <div className="w-full h-full shadow-xl bg-teal-300 rounded-3xl">
            <div className="shadow-inner rounded-3xl">
                <div className="p-5">
                    <Line width="900px" height="400px" data={data} options={option} />
                </div>
            </div>
        </div>
    );
}

export default LineChartFull;