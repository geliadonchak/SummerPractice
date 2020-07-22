import React, {Component} from 'react';
import './App.css';
import Car from './components/cars/Car';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Counter from './components/counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
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

    UNSAFE_componentWillMount() {
        console.log('App componentWillMount');
    }

    componentDidMount() {
        console.log('App componentDidMount');
    }

    render() {
        console.log('App render');

        const divStyle = {textAlign: 'center'};

        let carsList = null;
        if (this.state.showCars) {
            carsList = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onDelete={() => this.handleDelete(index)}
                            onChangeName={event => this.handleChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>
                );
            })
        }

        return (
            <div style={divStyle}>
                <h1>{this.props.title}</h1>
                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>
                <hr />
                <button style={{marginTop: '20px'}} onClick={this.handleToggleCars}>Toggle cars</button>
                <button onClick={() => this.setState({clicked: true})}>Change clicked</button>
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
