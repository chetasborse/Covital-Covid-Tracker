import React, {Component} from "react"
import axios from 'axios'
import styles from './WorldData.module.css'
import AnimatedNumber from "animated-number-react";

class IndiaData extends Component {
    constructor() {
        super()
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
            todayconfirmed: 0,
            todaydeaths: 0,
            todayrecovered: 0,
            errormsg: ''

        }
    }

    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/countries/India?yesterday=false&strict=true&query')
        .then(response => {
            this.setState({
                confirmed: response.data.cases,
                recovered: response.data.recovered,
                deaths: response.data.deaths,
                todayconfirmed: response.data.todayCases,
                todayrecovered: response.data.todayRecovered,
                todaydeaths: response.data.todayDeaths,
            })
        })
        .catch(error => {
            this.setState({errormsg: 'Failed to retrieve data'})
        })
    }

    formatValue = value => `${Number(value).toFixed(0)}`;

    render() {
        const {confirmed, recovered, deaths, todayconfirmed, todayrecovered, todaydeaths} = this.state
        return(
            <React.Fragment>
                <div className={styles.bord}>
                    <p className={styles.confirmed}>Confirmed: <AnimatedNumber value={confirmed} duration={4000} formatValue={this.formatValue}/> (+<AnimatedNumber value={todayconfirmed} duration={6000} formatValue={this.formatValue}/>)</p>
                    <p className={styles.recovered}>Recovered: <AnimatedNumber value={recovered} duration={4000} formatValue={this.formatValue}/> (+<AnimatedNumber value={todayrecovered} duration={6000} formatValue={this.formatValue}/>)</p>
                    <p className={styles.deaths}>Deaths: <AnimatedNumber value={deaths} duration={4000} formatValue={this.formatValue}/> (+<AnimatedNumber value={todaydeaths} duration={6000} formatValue={this.formatValue}/>)</p>
                </div>
            </React.Fragment>
        )
    }
}

export default IndiaData