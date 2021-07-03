/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import data from './content/data';
import List from './List';
import Image from './Image';
import '../style/App.sass';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sendIndex = (i) => setCurrentIndex(i);

    useEffect(() => {
        const keypressed = (e) => {
            if (e.keyCode == '38' || e.keyCode == '40') e.preventDefault();

            if (e.keyCode == '38')
                setCurrentIndex(
                    (prevIndex) => (prevIndex - 1 + data.length) % data.length
                );

            if (e.keyCode == '40')
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        };
        window.addEventListener('keydown', keypressed);
    }, []);

    return (
        <div className="container0">
            <List currentIndex={currentIndex} sendIndex={sendIndex} />
            <Image currentIndex={currentIndex} />
        </div>
    );
};

export default App;
