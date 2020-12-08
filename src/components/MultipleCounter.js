import React, { Component } from 'react';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';

class MultipleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }

    render() {
        const size = this.state.size;

        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer />
            </div>
        );
    }
}

export default MultipleCounter;