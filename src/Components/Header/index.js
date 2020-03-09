import React from 'react';
import SearchBar from '../SearchBar';
import Button from '../Button'
import './style.css';

export default () => (
    <>
        <div className="header">
            <Button/>
            <SearchBar/>
        </div>
        <div className="nav"></div>
    </>
)