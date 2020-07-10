import React, {Component} from 'react';
import axios from 'axios';
import styles from './WorldData.module.css'
import AnimatedNumber from "animated-number-react";


class AllCountries extends Component {
    constructor() {
        super()
        this.state = {
            countrylist: [],
            errormsg: '',
            msg: '',
        }
    }

    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort=cases')
        .then(response => {
            this.setState({
                countrylist: response.data
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
            msg: keys.country
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
        const {countrylist, msg} = this.state;
        const eachcountry = countrylist.map((individual) => 
            <div key={individual.country} className={styles.listitems}  onMouseEnter={() => this.hoverDisplay(individual)} onMouseLeave={() => this.nonhoverDisplay(individual.country)} onClick={() => this.senddata1(individual)}>
                {   
                    individual.country 
                }
                <span> </span> 
                <img className={styles.flag} src={individual.countryInfo.flag} alt="flag"></img> 
                {
                    msg !== individual.country && <span className={styles.cases}>{individual.cases} (+{individual.todayCases})</span>
                }   
                {
                    msg === individual.country && <React.Fragment><div className="row">
                                                <div className={`col-sm-4 ${styles.confirmed1}`}><AnimatedNumber value={individual.cases} duration={300} formatValue={this.formatValue}/> (+<AnimatedNumber value={individual.todayCases} duration={300} formatValue={this.formatValue}/>) Confirmed</div>
                                                <div className={`col-sm-4 ${styles.recovered1}`}><AnimatedNumber value={individual.recovered} duration={300} formatValue={this.formatValue}/> (+<AnimatedNumber value={individual.todayRecovered} duration={300} formatValue={this.formatValue}/>) Recovered</div>
                                                <div className={`col-sm-4 ${styles.deaths1}`}><AnimatedNumber value={individual.deaths} duration={300} formatValue={this.formatValue}/> (+<AnimatedNumber value={individual.todayDeaths} duration={300} formatValue={this.formatValue}/>) Deaths</div>
                                            </div></React.Fragment>
                }
                {
                    msg !== individual.country && <hr></hr>
                }
                
            </div>
        )
        return(
            <div className={styles.bord}>
                <p className={styles.title}>Country wise</p>
                <div className={styles.borde}>
                {
                    eachcountry
                }
                </div>
            </div>
        )
    }   
}

export default AllCountries