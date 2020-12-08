import React, { Component } from 'react';
import Counter from "./Counter"

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        };
    }

    initArraySize = (size) => {
        const number = parseInt(size) > 0 ? parseInt(size) : 0;
        return Array.from(Array(number));
    }

    calculateSum = (sumUpdate) => {
        this.setState((prevState) => ({ sum: prevState.sum + sumUpdate }), () => { this.props.setSum(this.state.sum); });
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {initArraySize.map(value =>
                    <Counter key={value} size={size} calculateSum={this.calculateSum} />
                )}
            </div>
        );
    }
}

export default CounterGroup;