import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './WorldData.module.css'

class StateDetPie extends Component {
    render() {
        const lol = this.props.dets.districtData
        if(lol !== undefined) {
            const labs = lol.map((individual) => individual.name);
            const cased = lol.map((individual) => individual.confirmed);
            const len = labs.length
            let colors = []
            for(let i = 0; i < len; i++) {
                let r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
                let str = 'rgba(' + r + ',' + g + ',' + b + ', 1)'
                colors.push(str)
            }
            const data= {
                labels: labs,
                datasets: [
                    {
                        label: 'Sales for 2020(M)',
                        data: cased,
                        // backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 255, 1)', 'rgba(255, 255, 0, 1)', 'rgba(55, 0, 55, 1)', 'rgba(55, 55, 0, 1)', 'rgba(0, 255, 255, 1)', 'rgba(0, 55, 55, 1)', 'rgba(77, 65, 84, 1)', 'rgba(255, 63, 54, 1)', 'rgba(  55, 22, 65, 1)', 'rgba(25, 75, 39, 1)', 'rgba(205, 120, 90, 1)'],
                        backgroundColor: colors
                    }
                ]
            }
            const options = {
                title: {
                    display: true,
                    text: `${this.props.dets.state} Districtwise Cases`
                }
        
            }
            return (
                    <div className={styles.bord}>
                        <Doughnut data={data} options={options} width={200} height={200}/>
                    </div>
            )
        }
        return <React.Fragment></React.Fragment>
    }
    
    
    
    
}

export default StateDetPie