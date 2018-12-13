import React from 'react';
import Table from './table';

const students = [
    {
        student: 'John',
        course: 'Loops',
        grade: 88
    }, {
        student: 'Mary',
        course: 'Conditionals',
        grade: 96
    }, {
        student: 'Tom',
        course: 'Data Types',
        grade: 84
    }
];

function App() {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;

