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
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number));
    }

    increase = () => {
        this.setState({
            sum: this.state.sum + 1
        });
    }

    decrease = () => {
        this.setState({
            sum: this.state.sum - 1
        });
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                Sum: {this.state.sum}
                {initArraySize.map(value =>
                    <Counter key={value} increase={this.increase} decrease={this.decrease}/>
                )}
            </div>
        );
    }
}

export default CounterGroup;