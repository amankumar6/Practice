import React from 'react';
import data from './content/data';

const Image = ({ currentIndex }) => {
    let { title, link, src } = data[currentIndex];
    return (
        <div id="container2">
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    id="prev"
                    src={`https://res.cloudinary.com/dbvthtwhc/image/upload/v1613020555/portfolio/images/${src}`}
                    title={title}
                    alt={title}
                />
            </a>
            <p>{title}</p>
        </div>
    );
};

export default Image;
