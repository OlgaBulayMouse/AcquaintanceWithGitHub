import React, { Component } from 'react';
import {ListItem} from './components/ListItem';

export class List extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <ListItem
                        color={this.props.color}
                        fontSize={this.props.fontSize}
                    >
                        {item}
                    </ListItem>
                ))}
            </ul>
        );
    };
}
