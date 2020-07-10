import React, {Component} from 'react'
import CountryDetBar from './CountryDetBar'
import styles from './WorldData.module.css'
import axios from 'axios'
import CountryOverDays from './CountryOverDays'

class CountryDetails extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            dailydata : [],
            url: ''
        }
    }

    componentDidMount() {
       // console.log('ComponentDidMount')
        axios.get(this.props.urls)
        .then(response => {
            this.setState({
                dailydata: response.data,
                url: this.props.urls
            })
        })
        .catch(error => {
            this.setState({errormsg: 'Failed to retrieve data'})
        })
        console.log(this.state.url)
    }

    componentDidUpdate(prevProps) {
        if(this.props.urls !== prevProps.urls) {
            //console.log('ComponentDidUpdate')
            axios.get(this.props.urls)
            .then(response => {
                this.setState({
                    dailydata: response.data,
                    url: this.props.urls
                })
            })
            .catch(error => {
                this.setState({errormsg: 'Failed to retrieve data'})
            })
            // console.log(this.state.url)
        }
    }

    render() {
        const {statedetails} = this.props
        // console.log(this.state.url)
        
        return(
            <React.Fragment>
                    <h4 className={styles.bord2}>Country: {statedetails.country}</h4>
                <CountryDetBar dets={statedetails}/>
                {/* {statedetails &&
                <StateDetPie dets={statedetails}/>
                } */}
                <CountryOverDays daily={this.state.dailydata}/>
                
            </React.Fragment>
        )
    }
}

export default CountryDetails