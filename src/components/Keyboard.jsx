import React, { Component } from 'react';
import Key from './Key';
// import './Keyboard.css';

export default class Keyboard extends Component {
	render() {
		return (
			<div>
				<div className="keyboard-row">
					<Key className="small-button" keyTag='1' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='2' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='3' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='^' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='log' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='ln' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key className="small-button" keyTag='(&minus;)' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='2' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='hyp' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='sin' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='cos' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='tan' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key className="small-button" keyTag='RCL' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='ENG' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='(' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag=')' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag=',' keyClick={this.props.keyClick}/>	
					<Key className="small-button" keyTag='M+' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key keyTag='1' keyClick={this.props.keyClick}/>	
					<Key keyTag='2' keyClick={this.props.keyClick}/>	
					<Key keyTag='3' keyClick={this.props.keyClick}/>	
					<Key keyTag='DEL' keyClick={this.props.keyClick}/>	
					<Key keyTag='AC' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key keyTag='4' keyClick={this.props.keyClick}/>	
					<Key keyTag='5' keyClick={this.props.keyClick}/>	
					<Key keyTag='6' keyClick={this.props.keyClick}/>	
					<Key keyTag='&times;' keyClick={this.props.keyClick}/>	
					<Key keyTag='&divide;' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key keyTag='7' keyClick={this.props.keyClick}/>	
					<Key keyTag='8' keyClick={this.props.keyClick}/>	
					<Key keyTag='9' keyClick={this.props.keyClick}/>	
					<Key keyTag='+' keyClick={this.props.keyClick}/>	
					<Key keyTag='&minus;' keyClick={this.props.keyClick}/>	
				</div>
				<div className="keyboard-row">
					<Key keyTag='0' keyClick={this.props.keyClick}/>	
					<Key keyTag='.' keyClick={this.props.keyClick}/>	
					<Key keyTag='EXP' keyClick={this.props.keyClick}/>	
					<Key keyTag='Ans' keyClick={this.props.keyClick}/>	
					<Key keyTag='=' keyClick={this.props.keyClick}/>	
				</div>
			</div>
			);
	}
}

