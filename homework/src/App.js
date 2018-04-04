import React, { Component } from 'react';

import PostListItem from './Component/postListItem.js';
import MoreButton from './Component/moreButton.js';
import PostList from './Component/postList.js';
import Search from './Component/search.js';
import FetchData from './data.js';

import  './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            posts: [],
            limit: 10,
            search: ""
        };
    }
    
    componentDidMount() {
        setInterval(() => 
            Promise.all([FetchData()]).then(
                ([posts]) => {
                  this.setState({
                    posts,
                    isLoading: false
                  });
                }
            )
        , 3000);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return ( this.state.limit !== nextState.limit ||
               this.state.search !== nextState.search ||
               this.state.isLoading !== nextState.isLoading)
    }
    
    filterData = () => {
        return this.state.posts.filter((item) => {
            return item.title.toLowerCase().search(this.state.search.toLowerCase()) > -1;
        });
    }
    
    renderList = () => {
        if (this.filterData().length !== 0) {
            return this.filterData().slice(0, this.state.limit).map((data) => (
                <PostListItem 
                    key = {data.id} 
                    title = {data.title} 
                    body = {data.body} 
                    search = {this.state.search}
                />
            ));
        } else {
            return <h3 className = "noItemFound"> No items found </h3>;
        }
    }
    
    loadMore = () => {
        if (this.state.limit < this.filterData().length) {
            this.setState({
                limit: this.state.limit + 10
            });
        } else {
            alert("Sorry, this is end of list");
        }
    }
    
    search = (event) => {
        const { value } = event.target;
        this.setState({
            search: value 
        });
    };
    
    render() {
        return (
            <div>
                <header>
                    <h1 className = "header"> Post List </h1>
                </header>
                <Search search = {this.search}/>
                <PostList 
                    renderList = {this.renderList}
                    isLoading = {this.state.isLoading}
                />
                <MoreButton 
                    loadMore = {this.loadMore}
                    isLoading = {this.state.isLoading}
                />
            </div>
        );
    }
}