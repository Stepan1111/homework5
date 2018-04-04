import React from 'react';

export default function MoreButton(props) {
    
    if (props.isLoading === false) {
        return (
            <div className = "button">
                <button onClick = {props.loadMore}> Show More </button>
            </div>
        )
    } else return null;
}