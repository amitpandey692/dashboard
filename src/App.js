import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Filter from './Filter';
import Footer from './Footer';
import Introduction from './Introduction';
import Navigation from './Navigation';


class App extends Component {

   constructor() {
     super();
     this.state = {
       pieData:{}
     }
   }

   componentWillMount() {
     this.getPieData();
   }

   getPieData() {
     this.setState({
       pieData: {
        labels: ["Packaged", "Mobile", "Home Grown"],
        datasets: [
          {
            label:'Type of Application',
            data: [50, 25, 25],
             backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
            ]
          }
        ]
      }
     }

     )
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DevOps Tracker</h1>
        </header>
        <Filter/>
        <Chart pieData={this.state.pieData} />
        <Introduction />
        <Footer className="App-footer" />
      </div>
    );
  }
}

export default App;
