import React from 'react';

export default function Search(props) {
    return (
        <div className = "search">
            <input 
                onChange = {props.onSearch} 
                value = {props.value} 
                placeholder = "Search"
                type = "text" 
            />
        </div>
    );
}