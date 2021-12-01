import React, { useState } from 'react';
import './Overview.css';

const Overview = (props) => {
    return (
        <ul className="task-list">
            {props.tasks.map((item) => {
                return (
                    <li key={item.id} id={item.id}>
                        <span> {item.order}. {item.text}</span>
                        <button onClick={props.handleDelete}>X</button>
                    </li>
                ) 
            })}
        </ul>
    )
}

export default Overview;

