import React, { Component } from 'react';

import PostListItem from './Component/PostListItem.js';
import MoreButton from './Component/MoreButton.js';
import PostList from './Component/PostList.js';
import Search from './Component/Search.js';
import FetchData from './Data.js';

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
    
    getFilterData = () => {
        return this.state.posts.filter((item) => {
            return item.title.toLowerCase().search(this.state.search.toLowerCase()) > -1;
        });
    }
    
    getRenderList = () => {
        if (this.getFilterData().length !== 0) {
            return this.getFilterData().slice(0, this.state.limit).map((data) => (
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
    
    onLoadMore = () => {
        this.setState({
            limit: this.state.limit + 10
        });
    }
    
    onSearch = (event) => {
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
                <Search 
                    onSearch = {this.onSearch}
                    value = {this.state.search}
                />
                <PostList 
                    getRenderList = {this.getRenderList}
                    isLoading = {this.state.isLoading}
                />
                <MoreButton 
                    onLoadMore = {this.onLoadMore}
                    isLoading = {this.state.isLoading}
                />
            </div>
        );
    }
}