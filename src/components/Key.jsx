import React, { Component } from 'react';
// import './Key.css'

export default class Key extends Component {
	handleKeyClick() {
		// const keyType = this.props.keyType
		const keyTag = this.props.keyTag
		this.props.keyClick(keyTag);
	}

	render() {
		return (
			<button className={this.props.className}
			onClick={this.handleKeyClick.bind(this)}
			>{this.props.keyTag}</button>
			);
	}
}

