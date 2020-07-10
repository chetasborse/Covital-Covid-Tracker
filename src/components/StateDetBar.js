import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './WorldData.module.css'

function StateDetBar(props) {
    const data = {
        labels : ['Confirmed', 'Recovered', 'Deaths', 'Active'],
        datasets: [
            {
                label: `Total Cases in ${props.dets.state}`,
                data: [props.dets.confirmed, props.dets.recovered, props.dets.deaths, props.dets.active],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(77, 77, 77, 1)', 'rgba(100, 100, 0, 1)'],
                backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(77, 77, 77, 0.5)', 'rgba(100, 100, 0, 0.5)']
            }
        ]

    }
    const options1 = {
        title: {
            display: true,
            text: `Total Cases`
        }
    }
    return(
        <div className={styles.bord}>
        <Bar data={data} options={options1}/>
        </div>
    )
}

export default StateDetBar