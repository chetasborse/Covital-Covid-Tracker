import React, {Component} from 'react';
import './App.css';
import WorldData from './components/WorldData';
import IndiaData from './components/IndiaData';
import AllCountries from './components/AllCountries';
import AllStates from './components/AllStates';
import StateDetails from './components/StateDetails';
import CountryDetails from './components/CountryDetails';
import styles from './components/WorldData.module.css'

class App extends Component {
    constructor() {
      super()
      this.state = {
        stateM : {},
        identity1: '',
        url: '',
        stateData : false,
        countryData : false,
        news: [],
        choice: 'Global'
      }
    }

    senddata(elems) {
      this.setState({
        stateM : elems,
        identity1 : (elems.id.substring(3,5)).toLowerCase(),
        stateData: true,
        countryData: false
      })
    }

    senddata2(elems) {
      this.setState({
        stateM : elems,
        stateData: false,
        countryData: true,
        url : 'https://api.covid19api.com/total/country/' + elems.country
      })
    }

    changechoice = (event) => {
      this.setState({
          choice: event.target.value
      })
  
    }

    componentDidMount() {
      fetch("https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
          "x-rapidapi-key": "c8427d9ed5mshb851ef8412b8c63p1af55ajsn1a3e3727626a"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(myJson => {
      this.setState({
        news: myJson.articles
      })
      console.log(myJson.articles)
    })
    .catch(err => {
      console.log(err)
    });
    }

    render() {
      const {stateM} = this.state
      const news = this.state.news.map((individual) => 
            <div className={styles.bord2} key={individual._id}>
              <h6 className={styles.title4}>{individual.title}</h6>
              <h6 className={styles.content}>{individual.summary}</h6><br></br>
              <a className="btn" href={individual.link}>Checkout</a>
            </div>
      )
      // console.log(this.state.choice)
    return (
      <div className="App row">
        <div className="col-sm-3">
          <div className={styles.bord3}>
          <select className={styles.title2} value={this.state.choice} onChange={this.changechoice}>
                      <option value="Global">Global</option>
                      <option value="India">India</option>
          </select></div>
          {
            this.state.choice === 'Global' &&
            <React.Fragment>
            <WorldData />
            <AllCountries getdata={this.senddata2.bind(this)}/></React.Fragment>
          }
          {
            this.state.choice === 'India' &&
            <React.Fragment>
            <IndiaData />
          <AllStates getdata={this.senddata.bind(this)}/></React.Fragment>
          }
        </div>
        <div className="col-sm-6">
          {
            !this.state.stateData && !this.state.countryData && 
                        <h1 className={styles.bord2}>
                          Hover Over States and Countries for details
                        </h1>
          }
          {
            this.state.stateData && <StateDetails statedetails={stateM} iden={this.state.identity1}/> 
          }
          {
            this.state.countryData && <CountryDetails statedetails={stateM} urls={this.state.url}/> 
          }
        </div>
        <div className="col-sm-3">
          <h4 className={styles.bord2}>News</h4>
          <div className={styles.borde2}>
          {news}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
