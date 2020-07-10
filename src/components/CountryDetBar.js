import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './WorldData.module.css'

function CountryDetBar(props) {
    const data1 = {
        labels : ['Confirmed', 'Recovered', 'Deaths', 'Active'],
        datasets: [
            {
                label: `Cases in ${props.dets.country}`,
                data: [props.dets.cases, props.dets.recovered, props.dets.deaths, props.dets.active, ],
                borderColor: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(77, 77, 77, 0.7)', 'rgba(100, 100, 0, 0.7)'],
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

    const data2 = {
        labels : ['Cases', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: `Rise in Cases Today`,
                data: [props.dets.todayCases, props.dets.todayRecovered, props.dets.todayDeaths],
                borderColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(77, 77, 77, 1)'],
                backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(0, 255, 0, 0.8)', 'rgba(77, 77, 77, 0.8)']
            }
        ]
    }

    const options2 = {
        title: {
            display: true,
            text: 'Rise Today'
        }
    }

    return(
        <div className={styles.bord}>
        <Bar data={data1} options={options1}/>
        {    
            (props.dets.todayCases || props.dets.todayRecovered || props.dets.todayDeaths) && <Bar data={data2} options={options2}/>
        }
        </div>
    )
}

export default CountryDetBar