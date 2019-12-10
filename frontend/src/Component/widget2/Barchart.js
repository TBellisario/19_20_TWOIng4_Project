
import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class Barchart extends Component {
    render() {
        const data = [
            {
              name: 'Janvier', Matin: 4000, Aprèsmidi: 2400, amt: 2400,
            },
            {
              name: 'Février', Matin: 3000, Aprèsmidi: 1398, amt: 2210,
            },
            {
              name: 'Mars', Matin: 2000, Aprèsmidi: 9800, amt: 2290,
            },
            {
              name: 'Avril', Matin: 2780, Aprèsmidi: 3908, amt: 2000,
            },
            {
              name: 'Mai', Matin: 1890, Aprèsmidi: 4800, amt: 2181,
            },
            {
              name: 'Juin', Matin: 2390, Aprèsmidi: 3800, amt: 2500,
            },
            {
              name: 'Juillet', Matin: 3490, Aprèsmidi: 4300, amt: 2100,
            },
          ];
        return (
            <div>
                <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Matin" fill="#D3EEFF" />
                <Bar dataKey="Aprèsmidi" fill="#EAEBFF" />
                </BarChart>
            </div>
        );
    }
}

export default Barchart;
