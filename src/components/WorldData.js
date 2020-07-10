import React, {Component} from 'react';
import axios from 'axios'
import styles from './WorldData.module.css'
import AnimatedNumber from "animated-number-react";

class WorldData extends Component {
    constructor() {
        super()
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentDidMount() {
        axios.get('https://covid19.mathdro.id/api')
        .then(response => {
            this.setState({
                confirmed: response.data.confirmed.value,
                recovered: response.data.recovered.value,
                deaths: response.data.deaths.value,
            })
        })
        .catch(error => {
            this.setState({errormsg: 'Failed to retrieve data'})
        })
    }

    formatValue = value => `${Number(value).toFixed(0)}`;

    render() {
        const {confirmed, recovered, deaths} = this.state
        return(
            <React.Fragment>
                <div className={styles.bord} >
                    <p className={styles.confirmed}>Confirmed: <AnimatedNumber value={confirmed} duration={5000} formatValue={this.formatValue}/></p>
                    <p className={styles.recovered}>Recovered: <AnimatedNumber value={recovered} duration={5000} formatValue={this.formatValue}/></p>  
                    <p className={styles.deaths}>Deaths: <AnimatedNumber value={deaths} duration={5000} formatValue={this.formatValue}/></p>
                </div>
            </React.Fragment>
        )
    }
}

export default WorldData