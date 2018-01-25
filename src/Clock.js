import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.state.days} day(s)</div>
                <div className="Clock-hours">{this.state.hours} hour(s)</div>
                <div className="Clock-minutes">{this.state.minutes} minute(s)</div>
                <div className="Clock-seconds">{this.state.seconds} second(s)</div>
            </div>
        )
    }
}

export default Clock;