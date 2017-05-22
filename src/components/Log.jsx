import React, { Component } from 'react';

export default class Log extends Component {
	render() {
		return (
			<div className="log">{this.props.log}</div>
			)
	}
}

