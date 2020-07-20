import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2017},
            {name: 'Mazda', year: 2019}
        ],
        pageTitle: 'React components'
    }

    changeTitleHandler = () => {
        const oldTitle = this.state.pageTitle
        const newTitle = oldTitle + ' (changed)'
        this.setState({
            pageTitle:newTitle
        })
    }

    render () {
        const divStyle = {
            textAlign: 'center'
        }

        const cars = this.state.cars
        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.changeTitleHandler}>Change title</button>

                <Car name={cars[0].name} year={cars[0].year} />
                <Car name={cars[1].name} year={cars[1].year} />
                <Car name={cars[2].name} year={cars[2].year} />
            </div>
        );
    }
}

export default App;
