import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                labelColor: '#285e61',
                data: [1,2,1,3,5],
                borderColor: ['#285e61'],
                backgroundColor: ['transparent'],
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#285e61',
                pointBorderWidth: 5
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1,3,2,5,2],
                borderColor: ['#285e61'],
                backgroundColor: ['transparent'],
                pointBackgroundColor: '#FF0000',
                pointBorderColor: '#285e61',
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
        <div className="w-full h-full shadow-xl bg-gray-300 rounded-3xl">
            <div className="shadow-inner rounded-3xl">
                <div className="p-5">
                    <Line data={data} options={option} />
                </div>
            </div>
        </div>
    );
}

export default LineChart;