import React from 'react';
import './style.css';
export default (props) => {
    return (
        <div className="FooterLinks">
            <h4>{props.title}</h4>
            {props.links.map( link => (
                <a href={link.link}>
                    <p>{link.title}</p>
                </a>
            ))}
        </div>
    );
}