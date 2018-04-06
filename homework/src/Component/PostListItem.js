import React, { Component } from 'react';

export default class PostListItem extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.title !== nextProps.title ||
            this.props.body !== nextProps.body 
        )
    }
    
    render() {
        return (
            <li className = "listItem"  key = {this.props.id}>
                <h3> {this.props.title} </h3>
                <p> {this.props.body} </p>
            </li>
        );
     }
}