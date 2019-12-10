import Calendar from 'react-widgets/lib/Calendar';
import { Calendar } from 'react-widgets';


let { Calendar } = ReactWidgets;


import React, { Component } from 'react';

class Calendar extends Component {
    render() {
        return (
            <div>
                <Calendar 
                dateFormat={dt => String(dt.getDate())}
                />
            </div>
        );
    }
}

export default Calendar;