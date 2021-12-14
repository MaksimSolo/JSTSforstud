import React from 'react';
import './App.css';

function App() {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const users = [
        {
            id:1,
            name: 'Dimych'
        },
        {
            id:2,
            name: 'Sveta'
        },
        {
            id:3,
            name: 'Katya'
        },
        {
            id:4,
            name: 'Viktor'
        },
        {
            id:5,
            name: 'Ignat'
        }
    ]
    const liElements = users.map(el => <li key={el.id}>{el.name}</li>) //кей ключ должен быть всегда в самом внешнем элементе по которому делаем мап.
    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
