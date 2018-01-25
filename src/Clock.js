import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    //calculates the past props data and the current days, hours, minutes, seconds
    //before rendering the data on to the screen
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    //runs after the component has completed the render on to the application
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    //leading 0 helper method
    //ensures that the spacing for the timer always looks nice
    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }




    render() {

        return (
            <div>
                <div className="Clock-days">{this.leading0(this.state.days)} day(s)</div>
                <div className="Clock-hours">{this.leading0(this.state.hours)} hour(s)</div>
                <div className="Clock-minutes">{this.leading0(this.state.minutes)} minute(s)</div>
                <div className="Clock-seconds">{this.leading0(this.state.seconds)} second(s)</div>
            </div>
        )
    }
}

export default Clock;