import React from 'react';
import './style.css';
import FooterLinks from '../FooterLinks';
const links = [
    {title: 'Footer Link 1', link: "#"},
    {title: 'Footer Link 2', link: "#"}
];
export default () => (
    <div className="footer">
        <div className="link-container">
            <FooterLinks title="Left Footer Links" links={links}/>
            <FooterLinks title="Right Footer Links" links={links}/>
        </div>
    </div>
)