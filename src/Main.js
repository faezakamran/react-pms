import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import WaitLoading from './WaitLoading.js';
import AppointmentSchedule from './AppointmentSchedule.js';

class Main extends Component {
  render() {
    return (
		<div>
			<WaitLoading show="none" />
			<AppointmentSchedule />
		</div>
    );
  }
}

export default Main;
