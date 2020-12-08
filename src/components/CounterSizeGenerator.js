import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
        };
    }

    onChange = (event) => {
        this.setState({ size: event.target.value }, ()=>{this.props.setSize(this.state.size); this.props.setSum(0);});
    }

    render() {
        const size = this.state.size;

        return (
            <div>
                <input type="number" value={size} onChange={this.onChange} />
            </div>
        );
    }
}

export default CounterSizeGenerator;