import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

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
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <button onClick={this.addCounter}>+</button>
            </>
        );
    }
}

export default Counter;