import React, { Component } from 'react';

export class Vote extends Component {

    state = {count: 0, name: "undefinded"}
    
    constructor(props) {
        super(props);
        this.state = { count: 0, name: props.name }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    } 

    render() {
        return (     
            <div className="language"><div className="voteCount">{this.state.count}</div> {this.state.name} <button onClick={this.incrementCount}>Vote! ⚡</button></div>
        );
    }
}