import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import Image from './scrapbook_images';


const Scrapbook = () => {

    const images = imageData.map( (item, index) => {
        return (
            <Image key={index} about={item}/>
        )
    })
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}

export default Scrapbook;