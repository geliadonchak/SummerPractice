import React, {Component} from 'react';
import './App.css';
import Car from './components/Cars/Car';

class App extends Component {
    constructor(props) {
        console.log('App constructor')
        super(props);

        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2017},
                {name: 'Mazda', year: 2019}
            ],
            pageTitle: 'React components',
            showCars: false
        }
    }

    handleToggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    }

    handleChangeName = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const cars = this.state.cars;
        cars[index] = car;
        this.setState({
            cars: cars
        });
    }

    handleDelete = (index) => {
        const cars = this.state.cars;
        cars.splice(index, 1);
        this.setState({
            cars: cars
        });
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('App render');

        const divStyle = {textAlign: 'center'};

        let carsList = null;
        if (this.state.showCars) {
            carsList = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={() => this.handleDelete(index)}
                        onChangeName={event => this.handleChangeName(event.target.value, index)}
                    />
                );
            })
        }

        return (
            <div style={divStyle}>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleToggleCars}>Toggle cars</button>

                <div style={{
                    width: '400px',
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {carsList}
                </div>
            </div>
        );
    }
}

export default App;
