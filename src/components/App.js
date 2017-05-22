import React, { Component } from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import '../App.css'

const math = require('mathjs');
const he = require('he');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      log: '',
      clickedEquals: false
    }
  }

  keyClick(keyTag) {
    const currentLog = this.state.log
    let newLog = ''
    const times = he.decode('&#x000D7;');
    const divide = he.decode('&divide;');
    const minus = he.decode('&minus;');
    if (keyTag === '=') {
      newLog = currentLog.replace(times, '*').replace(divide, '/').replace(minus, '-')
      .replace('Ans', this.state.result.toString())
      .replace(/E/g, '10^')
      const result = math.eval(newLog)
      this.setState({result: result})
      this.setState({clickedEquals: true})
    } else if (keyTag === 'AC') {
      this.setState({log: ''})
      this.setState({result: 0})
    } else if (keyTag === 'EXP') {
      this.setState({log: currentLog + 'E', clickedEquals: false})
    } else if (keyTag === 'DEL') {
      this.setState({log: currentLog.slice(0, currentLog.length - 1)})
    } else if (keyTag.match(/sin|cos|tan/)) {
        if (this.state.clickedEquals) {
          this.setState({log: keyTag + '(', clickedEquals: false})
        } else {
          this.setState({log: currentLog + keyTag + '('})
        }
    } else if (this.state.clickedEquals) {
      if (keyTag.match(/[0-9.]|Ans/)) {
        this.setState({log: keyTag, clickedEquals: false})
      } else {
        this.setState({log: 'Ans' + keyTag, clickedEquals: false})
      }
    } else {
      this.setState({log: currentLog + keyTag})
    }
  }

  render() {
    return (
      <div className="calc-container">
      <Screen log={this.state.log} result={this.state.result}/>
      <Keyboard keyClick={this.keyClick.bind(this)}/>
      </div>
      );
  }
}


