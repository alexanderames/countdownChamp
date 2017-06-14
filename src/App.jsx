import React, { Component } from 'react';
import './App.css'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017'
		}
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<div className="clockDays">14 Days</div>
					<div className="clockHours">20 Hours</div>
					<div className="clockMinutes">56 Minutes</div>
					<div className="clockSeconds">04 Seconds</div>
				</div>
				<div>
					<input placeholder='new date'/>
					<button>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;