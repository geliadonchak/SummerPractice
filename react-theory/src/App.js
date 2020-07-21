import React from 'react';
import './App.css';
import Car from './components/Cars/Car';

function App(props) {
    const [state, setState] = React.useState({
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2017},
            {name: 'Mazda', year: 2019}
        ],
        pageTitle: 'React components',
        showCars: false
    });

    const divStyle = {textAlign: 'center'};

    function handleToggleCars() {
        setState({
            ...state,
            showCars: !state.showCars
        });
    }

    function handleChangeName(name, index) {
        const car = state.cars[index];
        car.name = name;
        const cars = [...state.cars];
        cars[index] = car;
        setState({
            ...state,
            cars: cars
        })
    }

    function handleDelete(index) {
        const cars = state.cars;
        cars.splice(index, 1);
        setState({
            ...state,
            cars: cars
        })
    }

    let carsList = null;
    if (state.showCars) {
        carsList = state.cars.map((car, index) => {
            return (
                <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onDelete={() => handleDelete(index)}
                    onChangeName={event => handleChangeName(event.target.value, index)}
                />
            );
        })
    }

    return (
        <div style={divStyle}>
            {/*<h1>{state.pageTitle}</h1>*/}
            <h1>{props.title}</h1>
            <button onClick={handleToggleCars}>Toggle cars</button>

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

export default App;
