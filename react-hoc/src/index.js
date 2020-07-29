import React from 'react';
import ReactDOM from 'react-dom';

const starWarsChars = [
    {name: 'Дарт Вэйдер', side: 'dark'},
    {name: 'Люк Скайворкер', side: 'light'},
    {name: 'Палпатин', side: 'dark'},
    {name: 'Обиван Кеноби', side: 'light'}
];

const App = ({list, side}) => {
    const filteredList = list.filter(char => char.side === side);

    return (
        <ul>
            {filteredList.map((char, index) => {
                return (
                    <li key={char.name + index}>
                        <strong>{char.name}</strong> - &nbsp;
                        {char.side}
                    </li>
                )
            })}
        </ul>
    );
}

ReactDOM.render(<App list={starWarsChars} side="dark"/>, document.getElementById('root'));

