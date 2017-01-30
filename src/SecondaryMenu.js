import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class SecondaryMenu extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(id, obj){

		let pmsEvent = {};
		pmsEvent['component'] = "SecondaryMenu";
		pmsEvent['id'] = id;
		pmsEvent['obj'] = obj;
		
		this.props.upwardEvent(pmsEvent);
	}
	
	render() {
		console.log(this.props.propsMainMenu.itemActive);
		switch(this.props.propsMainMenu.itemActive) {
			case "appointments":
				return (
				  <div>
					 <Navbar onSelect={this.handleClick} >
						<Nav>
						  <NavItem eventKey="schedule" href="#">Schedule</NavItem>
						  <NavItem eventKey="view" href="#">View</NavItem>
						 </Nav>
					  </Navbar>
				  </div>
				);
			case "settings":
				return (
				  <div>
					 <Navbar onSelect={this.handleClick} >
						<Nav>
						  <NavItem eventKey="setting1" href="#">Setting1</NavItem>
						  <NavItem eventKey="setting2" href="#">Setting2</NavItem>
						</Nav>
					  </Navbar>
				  </div>
				);
			default: return(null);
		}
	}
}

export default SecondaryMenu;
