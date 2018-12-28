import React from 'react';
import { Route } from 'react-router-dom'; 
import Welcome from './welcome';
import Nav from './nav';
import Macarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';


const App = () => {

    return(
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={Macarons}/>
            <Route path="/gifts-parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default App;