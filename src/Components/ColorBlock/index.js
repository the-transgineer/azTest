import React from "react";
import './style.css';

export default (props) => {
    const style = {'background-color': props.color}
    return (
            <div style={style} className="ColorBlock">
                <p>{props.color}</p>
            </div>
    );
}
