import React, { Component } from 'react';
import CounterGroup from './CounterGroup';


class MultipleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
    }

    onChange = (event) => {
        this.setState({ size: event.target.value });
    }

    render() {
        const size = this.state.size;

        return (
            <div>
                <input type="number" value={size} onChange={this.onChange} />
                <CounterGroup size={size} />
            </div>
        );
    }
}

export default MultipleCounter;