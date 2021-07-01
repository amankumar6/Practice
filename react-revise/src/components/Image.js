import React, { Component } from 'react';
import data from './content/data';

export class Image extends Component {
    render() {
        let { title, link, src } = data[this.props.currentIndex];
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
    }
}

export default Image;
