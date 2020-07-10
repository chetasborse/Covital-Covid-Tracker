import React, {Component} from 'react'
import styles from './Navbar.module.css'
import Logo from './covid.png'

class Navbar extends Component {
    render() {
        return(
            <React.Fragment>
                <h1 className={styles.navbar}>C<img src={Logo} alt="websitelogo" className={styles.logo}></img>vital</h1>
            </React.Fragment>
        )
    }
}

export default Navbar