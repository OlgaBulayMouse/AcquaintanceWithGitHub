import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            color: this.props.color,
            fontSize: this.props.fontSize,
        };
        this.click = this.click.bind(this);
        this.toogleFontStyle = this.toogleFontStyle.bind(this);
        this.toogleFontSeize = this.toogleFontSeize.bind(this);
    };
    render() {
        return (
            <li
                style={{
                    color: !this.state.isActive ? this.props.color : 'red',
                    fontStyle: this.state.isActive ? 'italic' : 'normal',
                    fontSize: !this.state.isActive ? this.props.fontSize : 68,
                }}
                onClick={this.click}
            >
                {this.props.children}
            </li>
        );
    };

    click() {
        this.toogleColor();
        this.toogleFontStyle();
        this.toogleFontSeize();
    };

    toogleFontStyle() {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }
        ), () => {
            console.log(this.state)
        });
    };

    toogleColor() {
        this.setState({
            color: 'red'
        });
    };

    toogleFontSeize() {
        this.setState({
            fontSize: '58'
        });
    };
};

export default ListItem;