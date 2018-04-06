import React, { Component } from 'react';

export default class PostList extends Component {
    
    render() {
        if (this.props.isLoading) {
            return (
                <div className="loder">
                    <div className="lds-dual-ring"></div>
                </div>
            )
        }
        return (
            <div>
                <ul className = "list">
                    {this.props.getRenderList()}
                </ul>
            </div>
        );
    }
}
