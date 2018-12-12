import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () =>  {
    return Math.floor(Math.random() * 1000) + 1;
}

console.log(luckyNumber());

function greeting(user) {
    return <div className="container">
        <h1>Hello {user.name}</h1>
        <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
    </div>

}
const user = {
    name: 'jim',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
