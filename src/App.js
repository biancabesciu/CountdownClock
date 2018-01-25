import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
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
        this.setState({deadline: this.state.newDeadline});
    }

    handleNewDeadline (event) {
        this.setState({newDeadline: event.target.value});
    }

    render() {
        console.log(this.state.newDeadline);
        return (
            <div className="App">

                <div className="App-title">Countdown to {this.state.deadline}</div>

                <Clock deadline={this.state.deadline}/>

                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        placeholder="new date"
                        onChange={this.handleNewDeadline}
                    />

                    <Button onClick={this.changeDeadline}>Submit</Button>
                </Form>
            </div>
    );
  }
}

export default App;
