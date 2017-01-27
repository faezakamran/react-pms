import React, { Component } from 'react';
import MainMenu from './MainMenu.js';
import SecondaryMenu from './SecondaryMenu.js';

class Header extends Component {
	
	constructor(props) {
		super(props);
		this.upwardHandler = this.upwardHandler.bind(this);
		
	}
	 
	upwardHandler(pmsEvent) {
		console.log(pmsEvent);
		this.props.upwardEvent(pmsEvent);
	}
	
	render() {
		return (
			<div>
				<MainMenu upwardEvent={this.upwardHandler}  propsMainMenu={this.props.propsMainMenu} />
				<SecondaryMenu upwardEvent={this.upwardHandler} propsMainMenu={this.props.propsMainMenu} propsSecondaryMenu={this.props.propsSecondaryMenu} />
			</div>
		);
	}
}

export default Header;
