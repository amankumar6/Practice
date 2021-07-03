/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import data from './content/data';

const List = ({ currentIndex, sendIndex }) => {
    const divRef = React.createRef();

    useEffect(() => {
        let div = divRef.current.childNodes;
        div.forEach((el) => {
            el.addEventListener('click', function () {
                sendIndex(parseFloat(this.id));
            });
        });
    }, []);

    useEffect(() => {
        divRef.current.childNodes[currentIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest',
        });
    }, [divRef]);

    let listItem = data.map(({ title, link, src }, i) => {
        return (
            <div
                id={i}
                key={src}
                className={currentIndex === i ? 'box1 active' : 'box1'}
            >
                <a herf={link}>
                    <img
                        src={`https://res.cloudinary.com/dbvthtwhc/image/upload/v1613020555/portfolio/images/${src}`}
                        title={title}
                        align="center"
                        alt={title}
                    />
                </a>

                <span>{title}</span>
            </div>
        );
    });

    return (
        <div className="container1" ref={divRef}>
            {listItem}
        </div>
    );
};

export default List;
