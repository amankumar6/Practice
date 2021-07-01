/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import data from './content/data';

import '../style/App.sass';

import List from './List';
import Image from './Image';

export class App extends Component {
    state = {
        currentIndex: 0,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.keypressed);
    }

    keypressed = (e) => {
        let { currentIndex } = this.state;
        if (e.keyCode == '38' || e.keyCode == '40') e.preventDefault();
        if (e.keyCode == '38') {
            this.setState({
                currentIndex: (currentIndex - 1 + data.length) % data.length,
            });
        }
        if (e.keyCode == '40') {
            this.setState({
                currentIndex: (currentIndex + 1) % data.length,
            });
        }
    };

    sendIndex = (i) => {
        this.setState({
            currentIndex: i,
        });
    };

    render() {
        return (
            <div className="container0">
                <List
                    currentIndex={this.state.currentIndex}
                    sendIndex={this.sendIndex}
                />
                <Image currentIndex={this.state.currentIndex} />
                <div class="circle1"></div>
                <div class="circle2"></div>
            </div>
        );
    }
}

export default App;
