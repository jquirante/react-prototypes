import React from 'react';
import MoviesContainer from './movie_container';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MoviesContainer/>
        </div>
    )
}

export default App;