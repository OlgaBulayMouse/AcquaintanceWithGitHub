import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
    render() {
        const list = [
            'rose',
            'tulip',
            'chamomile',
            'narcissus',
            'orhid',
        ];
        return (
            <List
                fontSize={48}
                color={'#800008'}
                items={list}
            />
        )
    };
};

export default App;