import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        count : 1
    };
    render() { 
        return (
        <div>
            <h1>Hello world</h1><button>Increment</button>
            <span>{this.formatCount()}</span>
        </div>
        );
    }
    formatCount()
    {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
     }
}
 
export default Counter;