import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '02 September, 2018',
            newDeadline: ''
        };

        this.changeDeadline = this.changeDeadline.bind(this);
        this.handleNewDeadline = this.handleNewDeadline.bind(this);
    }

    changeDeadline () {
        console.log('state', this.state);
        this.setState({deadline: this.state.newDeadline})
    }

    handleNewDeadline (event) {
        this.setState({newDeadline: event.target.value})
    }

    render() {
        return (
            <div className="App">

                <div className="App-title">Countdown to {this.state.deadline}</div>

                <Clock />

                <div>
                    <input
                        placeholder='new date'
                        onChange={this.handleNewDeadline}
                    />
                    <button onClick={this.changeDeadline}>Submit</button>
                </div>
            </div>
    );
  }
}

export default App;
