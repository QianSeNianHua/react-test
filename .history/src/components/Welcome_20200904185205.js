import React from 'react'

export class Welcome extends React.Component {
  render () {
    return <p>Welcome component, {this.props.name}</p>
  }
}

export function Welcome2 (props) {
  return <p>Welcome2 component, {props.name}</p>
}

function Greeting (props) {
  if (props.isToggleOn) {
    return <Welcome name="1" />
  } else {
    return <Welcome2 name="2" />
  }
}

export class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      num: 0,
      isToggleOn: true
    }
    this.lasers = this.lasers.bind(this)
  }

  render () {
    return (
    <div>
      <p>{this.state.date.toLocaleTimeString()}</p>
      <p>{this.state.num}</p>
      <button onClick={this.lasers}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      <Greeting isToggleOn={this.state.isToggleOn} />
    </div>
    )
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount () {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({
      date: new Date()
    })
    this.setState((state, props) => ({
      num: state.num + 1
    }))
  }

  lasers () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
}