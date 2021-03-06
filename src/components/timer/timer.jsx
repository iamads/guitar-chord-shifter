import React from 'react';

class Timer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick () {
      if (this.state.count === 5) {
        this.props.callThis();
        console.log(this.props);
        this.setState({count: 0 })
      } else {
        this.setState({count: (this.state.count + 1)})
      }
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
          </div>
        </div>
      )
    }
  }

export default Timer;


