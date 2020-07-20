import React from 'react';
import './App.css';
import Car from './components/Car';

function App() {
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

    function handleChangeTitle(name) {
        setState({
            ...state,
            pageTitle: name
        });
    }

    function handleToggleCars() {
        console.log(state);
        setState({
            ...state,
            showCars: !state.showCars
        });
    }

    let carsList = null;
    if (state.showCars) {
        carsList = state.cars.map((car, index) => {
            return (
                <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeTitle={() => handleChangeTitle(car.name)}
                />
            );
        })
    }

    return (
        <div style={divStyle}>
            <h1>{state.pageTitle}</h1>
            <button onClick={handleToggleCars}>Toggle cars</button>
            {carsList}
        </div>
    );
}

export default App;
