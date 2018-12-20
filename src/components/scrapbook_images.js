import React from 'react';

const Images = (props) => {
    const {style, src} = props.about;
    console.log(props);
    return (
        <div>
            <img className="scrapbook-image" src={src} style={style}/>
        </div>
    )
}

export default Images;