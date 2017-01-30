import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class MainMenu extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(id, obj){

		let pmsEvent = {};
		pmsEvent['component'] = "MainMenu";
		pmsEvent['id'] = id;
		pmsEvent['obj'] = obj;
		
		this.props.upwardEvent(pmsEvent);
	}
		
	render() {
		let appointments = false;
		let settings = false;
		
		switch(this.props.propsMainMenu.itemActive){
			case "appointments":
				appointments = true;
				break;
			case "settings":
				settings = true;
				break;
			default:
			break;
		}
		
		return (
			<Navbar inverse collapseOnSelect onSelect={this.handleClick} name="navbar">
				<Navbar.Header>
				  <Navbar.Brand>
					<a href="#" onClick={this.handleClick} >Swift-PMS</a>
				  </Navbar.Brand>
				  <Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				  <Nav>
					<NavItem eventKey="appointments" href="#" active={appointments} name="Appointments">Appointmnets</NavItem>
					<NavItem eventKey="settings" href="#"  active={settings} name="Settings">Settings</NavItem>
				  </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MainMenu;
