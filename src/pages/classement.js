import React from "react";
import Plot from 'react-plotly.js';

class PlotClass extends React.Component {
    render() {
        return (
        <Plot
            data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        />
        );
    }
}

function Classement() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Classement</h1>
                <PlotClass />
            </header>
        </div>
    );
};
 
export default Classement;