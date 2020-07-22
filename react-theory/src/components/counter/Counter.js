import React from 'react';
// import Auxiliary from '../../hoc/Auxiliary';
import Counter2 from '../counter2/Counter2';

class Counter extends React.Component {
    state = {counter: 0}

    addCounter = () => {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
    }

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <button onClick={this.addCounter}>+</button>
            </>
        );
    }
}

export default Counter;