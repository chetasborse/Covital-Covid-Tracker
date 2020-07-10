import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import styles from './WorldData.module.css'

class StateOverDays extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(props) {
        axios.get('https://api.covid19india.org/states_daily.json')
        .then(response => {
            this.setState({
                data: response.data.states_daily
            })
        })
    }

    render() {
    const ide = this.props.iden
    const cases = this.state.data.map((individual) => individual[ide])
    const cases2 = this.state.data.map((individual) => individual.date)
    const x_ax = cases2.filter((elem, index) => index % 3 === 0)
    const confirmcas = cases.filter((elem, index) => index % 3 === 0)
    const recovercas = cases.filter((elem, index) => index % 3 === 1)
    const deathcas = cases.filter((elem, index) => index % 3 === 2)
    
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

export default StateOverDays