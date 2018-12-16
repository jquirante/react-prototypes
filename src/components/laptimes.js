import React, { Component } from 'react';

class Laptime extends Component {
    constructor (props) {
        debugger;
        super(props);

        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        }

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
        }
    }

    trailingZero(number) {
        if(number<10) {
            return `0${number}`
        } else {
            return number
        }

    }
    leadingZero(number) {
        if(number<10) {
            return `${number}0`
        } else {
            return number
        }

    }
    componentWillReceiveProps(nextProps) {
    
        let { times } = nextProps;
        times = times.pop();
        const sec = times/1000;
        const min = sec/60;
        
        this.setState({
            hour: Math.floor(min/60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(times % 100),
        })

        
    }
    render() {
        const {hour, min, sec, ms} = this.state;
        return (
        <div style={this.timerStyle}>{this.trailingZero(hour)}:{this.trailingZero(min)}:{this.trailingZero(sec)}:{this.leadingZero(ms)}</div>
        )
    }
}

export default Laptime;
