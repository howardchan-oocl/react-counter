import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increaseSum, decreaseSum} from '../action'

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increaseSum());
    },
    decrease: () => {
        dispatch(decreaseSum());
    }
})

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;