import React from 'react';

function Table (props) {
    const tableRows = props.data.map( (student, index) => {
        return (
            <tr key={index}>
                        <td>{student.student}</td>
                        <td>{student.course}</td>
                        <td>{student.grade}</td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <td>Name</td>
                    <td>Course</td>
                    <td>Grade</td>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default Table;
