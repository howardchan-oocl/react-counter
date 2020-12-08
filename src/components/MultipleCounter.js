import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';


class MultipleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }

    setSize = (newSize) => {
        this.setState({
            size: newSize
        })
    }

    setSum = (newSum) => {
        this.setState({
            sum: newSum
        })
    }

    render() {
        const size = this.state.size;

        return (
            <div>
                <CounterSizeGenerator setSize={this.setSize} setSum={this.setSum} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={size} setSum={this.setSum} />
            </div>
        );
    }
}

export default MultipleCounter;