import React from 'react';

export default function Search(props) {
    return (
        <div className = "search">
            <input onChange = {props.search} type = "text" placeholder = "Search" />
        </div>
    );
}