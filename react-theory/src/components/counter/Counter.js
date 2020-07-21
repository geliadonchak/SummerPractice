import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

class Counter extends React.Component {
    state = {counter: 0}

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
    }

    render() {
        // return (
        //     <div>
        //         <h2>counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </div>
        // )

        // return [
        //     <h2 key={'0'}>counter {this.state.counter}</h2>,
        //     <button key={'1'} onClick={this.addCounter}>+</button>,
        //     <button key={'2'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        // ]

        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //         <button onClick={this.addCounter}>+</button>
        //     </React.Fragment>
        // )

        // return (
        //     <Auxiliary>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //         <button onClick={this.addCounter}>+</button>
        //     </Auxiliary>
        // )

        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <button onClick={this.addCounter}>+</button>
            </>
        )
    }
}

export default Counter;