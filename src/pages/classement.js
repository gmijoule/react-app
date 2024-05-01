import React from "react";
import Plot from 'react-plotly.js';

class PlotClass extends React.Component {

    constructor(props) {
        super();
        this.state = { ...props }
    }
    
    render() {
        return (
        <Plot {...this.state}/>
        );
    }
}

function Classement() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Classement</h1>
                <PlotClass data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={{width: 600, height: 400, title: 'A Fancy Plot'}}/>
            </header>
        </div>
    );
};
 
export default Classement;