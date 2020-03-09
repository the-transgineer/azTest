import React from 'react';
import './style.css';
import icon from './search_icon.svg'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.value
        })
    }

    render() {
        return(
            <div className="SearchBar">
                <input value={this.state.value} onChange={this.handleChange} type="text" />
                <img src={icon} className="mag"/>
            </div>
        );
    }
}