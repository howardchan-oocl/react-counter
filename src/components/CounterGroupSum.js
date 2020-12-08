import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                Sum: {this.props.sum}
            </div>
        );
    }
}

export default CounterGroupSum;