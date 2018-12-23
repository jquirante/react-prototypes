import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
        }
    }
    componentWillMount = () => {
        const BASE_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(BASE_URL).then( (response) => {
            console.log(response);

            this.setState({
                movies: response.data.feed.entry
            });
        });
    }
    render() {
        console.log('Render State: ', this.state);
        const { movies } = this.state;

        const movieList = movies.map( (movieInfo, index) => {
            return (
                <Movie info={movieInfo} key={index}/>
            )
        })

        return (
            <div>
                {movieList}
            </div>
        )
    }
    
}

export default MoviesContainer;