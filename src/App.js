import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import WaitLoading from './WaitLoading.js';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.eventHandler = this.eventHandler.bind(this);
		this.state = { 
			mainMenu : {'itemActive' : null},
			secondaryMenu : {'itemActive' : null}
		};
	}
	 
	eventHandler(pmsEvent) {
		console.log(pmsEvent);
		
		switch(pmsEvent.component){
			case "MainMenu":
				this.dispatchMainMenu(pmsEvent);
				break;
			case "SecondaryMenu":
				this.dispatchSecondaryMenu(pmsEvent);
				break;
			default:
			break;
		}
		
	}
	
	dispatchMainMenu(pmsEvent){
		
		if(pmsEvent.obj.type === 'click'){
			switch(pmsEvent.id){
				case "appointments":
					this.setState({
						mainMenu: {'itemActive' : pmsEvent.id},
						secondaryMenu: {'itemActive' : null}
					});
					break;
				case "settings":
					this.setState({
						mainMenu: {'itemActive' : pmsEvent.id},
						secondaryMenu: {'itemActive' : null}
					});
					break;
				default:
				break;
			}
		}else if(pmsEvent.obj.type === 'react-click'){
			this.setState({
				mainMenu: {'itemActive' : null},
				secondaryMenu: {'itemActive' : null}
			});
		}
	}
	
	dispatchSecondaryMenu(pmsEvent){
		
		if(pmsEvent.obj.type === 'click'){
			switch(pmsEvent.id){
				case "appointments":
					this.setState({
						secondaryMenu: {'itemActive' : pmsEvent.id}
					});
					break;
				case "settings":
					this.setState({
						secondaryMenu: {'itemActive' : pmsEvent.id}
					});
					break;
				default:
				break;
			}
		}
	}
	
	
	render() {
		return (
			<div className="container">
				<div className="header">
					<Header upwardEvent={this.eventHandler} propsMainMenu={this.state.mainMenu} propsSecondaryMenu={this.state.secondaryMenu} />
				</div>
				<div className="main">
					<Main upwardEvent={this.eventHandler} />
				</div>
				<div className="footer">
					<Footer  upwardEvent={this.eventHandler} />
				</div>
			</div>
		);
	}
}

export default App;
