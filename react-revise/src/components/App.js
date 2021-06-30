/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import data from './content/data';

import '../style/App.css';

import List from './List';
import Image from './Image';

export class App extends Component {
    state = {
        currentIndex: 0,
        allDiv: [],
    };

    componentDidMount() {
        window.addEventListener('keydown', this.keypressed);
    }

    keypressed = (e) => {
        let { currentIndex, allDiv } = this.state;

        if (e.keyCode == '38' || e.keyCode == '40') {
            this.remove_all_active_list();
            // loadImage(currentIndex);
        }

        if (e.keyCode == '38') {
            let newCurrentIndex = currentIndex;
            newCurrentIndex = (currentIndex - 1 + data.length) % data.length;
            this.setState({
                currentIndex: newCurrentIndex,
            });
            allDiv[currentIndex].classList.add('active');
        }

        if (e.keyCode == '40') {
            let newCurrentIndex = currentIndex;
            newCurrentIndex = (currentIndex + 1) % data.length;
            this.setState({
                currentIndex: newCurrentIndex,
            });
            allDiv[currentIndex].classList.add('active');
        }
    };

    remove_all_active_list = () =>
        this.state.allDiv.forEach((el) => el.classList.remove('active'));
    
    divElement = (el) => {
        this.setState({
            allDiv: el.childNodes,
        });
    };

    render() {
        return (
            <div className="container0">
                <List divElement={this.divElement} />
                <Image />
            </div>
        );
    }
}

export default App;
