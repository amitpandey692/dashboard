import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {

        super(props);
        this.state = {
              pieData:props.pieData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'bottom'
    }

    render() {
        return (
            <div className="App-Pie-Left" position="left">
                <Pie
                    data={this.state.pieData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Type of Application',
                            fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    },
                    maintainAspectRatio: false
	}}
/>
            </div>
        )
    }

}

export default Chart;   