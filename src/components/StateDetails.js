import React, {Component} from 'react'
import StateDetBar from './StateDetBar'
import StateDetPie from './StateDetPie'
import StateOverDays from './StateOverDays'
import styles from './WorldData.module.css'

class StateDetails extends Component {


    render() {
        const {statedetails, iden} = this.props

        return(
            <React.Fragment>
                    <h4 className={styles.bord2}>State: {statedetails.state}</h4>
                <StateDetBar dets={statedetails}/>
                <StateOverDays iden = {iden}/>
                {statedetails &&
                <StateDetPie dets={statedetails}/>
                }
            </React.Fragment>
        )
    }
}

export default StateDetails 