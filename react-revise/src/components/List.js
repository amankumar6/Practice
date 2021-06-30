import React, { Component } from 'react';
import data from './content/data';

export class List extends Component {
    divRef = React.createRef();

    componentDidMount() {
        this.props.divElement(this.divRef.current);
    }

    render() {
        let listItem = data.map(({ title, src }, i) => {
            return (
                <div className="box1" id={i} key={src}>
                    <img src={src} title={title} align="center" alt={title} />
                    <span>{title}</span>
                </div>
            );
        });
        return (
            <div className="container1" ref={this.divRef}>
                {listItem}
            </div>
        );
    }
}

export default List;
