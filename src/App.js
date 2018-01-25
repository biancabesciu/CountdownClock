import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {deadline: '02 September, 2018' }
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>

                <div>
                    <div className="Clock-days">day(s)</div>
                    <div className="Clock-hours">hour(s)</div>
                    <div className="Clock-minutes">minute(s)</div>
                    <div className="Clock-seconds">second(s)</div>
                </div>

                <div>
                    <input placeholder='new date'/>
                    <button>Submit</button>
                </div>
            </div>
    );
  }
}

export default App;
