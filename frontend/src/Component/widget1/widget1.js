import { LineChart, Line } from 'recharts';
import React, { Component } from 'react';

class widget1 extends Component {
    render() {
        const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

        return (
            <div>
                <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
                
            </div>
        );
    }
}

export default widget1;


