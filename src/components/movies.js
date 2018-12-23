import React from 'react';

const Movie = (props) => {
    const {info} = props;
    return (
       
        <div>
            <img src={info['im:image'][2].label}/>
            <h1>{info['im:name'].label}</h1>
            <p>{info.summary.label}</p>
        </div>
    )
}

export default Movie;