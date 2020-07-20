import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    render () {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <Car name={'Ford'} year={2018}/>
                <Car name="Audi" year={2017}/>
                <Car name={'Mazda'} year={2019}/>
            </div>
        );
    }
}

export default App;
