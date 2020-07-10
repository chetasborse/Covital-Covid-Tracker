import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import styles from './WorldData.module.css'

class CountryOverDays extends Component {

    render() {
    
    const cases = this.props.daily
    const confirmcas = cases.map((individual) => individual["Confirmed"])
    const recovercas = cases.map((individual) => individual["Recovered"])
    const deathcas = cases.map((individual) => individual["Deaths"]) 
    const x_ax = cases.map((individual) => individual["Date"])
    
    
    const data= {
        labels: x_ax,
        datasets: [
            {
                label: 'Confirmed',
                data: confirmcas ,
                borderColor: ['rgba(255, 0, 0, 0.6)'],
                backgroundColor: ['rgba(255, 0, 0, 0.2)'],
                pointBackgroundColor: 'rgba(255, 0, 0, 0.8)',
                pointBorderColor: 'rgba(255, 0, 0, 0.8)'
            },
            {
                label: 'Recovered',
                data: recovercas,
                borderColor: ['rgba(0, 255, 0, 0.6)'],
                backgroundColor: ['rgba(0, 255, 0, 0.2)'],
                pointBackgroundColor: 'rgba(0, 255, 0, 0.8)',
                pointBorderColor: 'rgba(0, 255, 0, 0.8)'
            },
            {
                label: 'Deaths',
                data: deathcas,
                borderColor: ['rgba(200, 200, 200, 0.6)'],
                backgroundColor: ['rgba(200, 200, 200, 0.2)'],
                pointBackgroundColor: 'rgba(200, 200, 200, 0.8)',
                pointBorderColor: 'rgba(200, 20, 200, 0.8)'
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Daily Changes'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0
                    }
                }
            ]
        }

    }
    return (
            <div className={styles.bord}>
                <Line data={data} options={options} />
            </div>
    )

}
}

export default CountryOverDays