import React, { Component } from 'react';
import CounterContainer from "../containers/CounterContainer"
import {v4 as uuidv4} from 'uuid';

class CounterGroup extends Component {
    initArraySize = (size) => {
        const number = parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number));
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map(() =>
                    <CounterContainer key={uuidv4()}/>
                )}
            </div>
        );
    }
}

export default CounterGroup;