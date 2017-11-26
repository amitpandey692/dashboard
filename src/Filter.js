import React, {Component} from 'react';
import App from './App';
import './App.css';

class Filter extends Component{

    constructor(props) {
        super(props);
            this.state = {value: 'Quality'};
            this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render()
    {
        return(
            <select className="App-Filter" value={this.state.value} onChange={this.handleChange}>
            <option value="sales-marketting">Sales & Marketting</option>
            <option value="GRM">GRM</option>
            <option value="Quality">Quality</option>
          </select>

        );
    }
}

export default Filter;