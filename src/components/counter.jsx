import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        count : 1,
        tags : ['tag1', 'tag2', 'tag3']
    };
    /*styles = {
        fontSize: 10,
        fontWeight: "bold"

    };*/
    render() { 
        let classes = "badge m-2 badge-";
        classes +=(this.state.count ===0) ? "badge-warning" : "badge-primary"
        return (
        <div>
            {/**I write here className as a class in span  but in the other example i write it as a variable */}
            {/*<span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>*/}
            <span style={{fontSize: 30}} className={classes}>{this.formatCount()}</span>
            <h1>Hello world</h1><button onClick= {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/*<span>{this.formatCount()}</span>*/}
            {/**How i can do a list of items  */}

            <ul>
                {this.state.tags.map(tag => <li> key={tag}</li>)}
            </ul>

        </div>
        );
    }
    formatCount()
    {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
     }
     handleIncrement(){
        console.log('Increment clicked');
     }
}
 
export default Counter;