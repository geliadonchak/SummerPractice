import React from 'react'

export default () => (
    <div>
        <h2>This is car component</h2>
        <p>1 + 1 = <strong>{1 + 1}</strong></p>
        <p>Random number: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
);