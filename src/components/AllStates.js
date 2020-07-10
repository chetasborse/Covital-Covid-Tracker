import React, {Component} from 'react';
import axios from 'axios';
import styles from './WorldData.module.css'
import AnimatedNumber from "animated-number-react";

class AllStates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statelist: [],
            errormsg: '',
            msg: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.covidindiatracker.com/state_data.json')
        .then(response => {
            this.setState({
                statelist: response.data
            })
        })
        .catch(error => {
            this.setState({
                errormsg: 'Error retrieving information'
            })
        })
    }

    hoverDisplay(keys) {
        this.setState({
            msg: keys.id
        })
        this.props.getdata(keys)
    }

    nonhoverDisplay(keys) {
        this.setState({
            msg: ''
        })
    }

    senddata1(obj) {
        this.props.getdata(obj)
    }

    formatValue = value => `${Number(value).toFixed(0)}`;

    render() {
        const {statelist, msg} = this.state;
        const eachstate = statelist.map((individual) => 
            <div key={individual.id} className={styles.listitems} onClick={() => this.senddata1(individual)} onMouseEnter={() => this.hoverDisplay(individual)} onMouseLeave={() => this.nonhoverDisplay(individual)}>
                { 
                    individual.state
                } 
                { 
                    msg !== individual.id && <span className={styles.cases}>
                                                {individual.confirmed}
                                            </span>
                }
                {   
                    msg === individual.id && <div className="row">
                                                <div className={`col-sm-4 ${styles.confirmed1}`}><AnimatedNumber value={individual.confirmed} duration={300} formatValue={this.formatValue}/> Confirmed</div>
                                                <div className={`col-sm-4 ${styles.recovered1}`}><AnimatedNumber value={individual.recovered} duration={300} formatValue={this.formatValue}/> Recovered</div>
                                                <div className={`col-sm-4 ${styles.deaths1}`}><AnimatedNumber value={individual.deaths} duration={300} formatValue={this.formatValue}/> Deaths</div>
                                            </div>
                } 
                {
                     msg !== individual.id && <hr></hr>
                }
                
            </div>
        )
        return(
            <div className={styles.bord}>
                <p className={styles.title}>State wise</p>
                <div className={styles.borde}>
                {
                    eachstate
                }
                </div>
            </div>
        )
    }   
}

export default AllStates