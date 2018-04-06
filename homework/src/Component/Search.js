import React from 'react';

export default function Search(props) {
    return (
        <div className = "search">
            <input onChange = {props.onSearch} type = "text" placeholder = "Search" />
        </div>
    );
}