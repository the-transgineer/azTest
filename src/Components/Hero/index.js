import React from 'react';
import './style.css';
import ColorBlock from '../ColorBlock';

const style = {
    'backgroundImage': `radial-gradient(circle at center, rgba(0,0,0,0.27) 0%, #000000 100%), url(${process.env.PUBLIC_URL}/images/B&W_bg.jpg)`,
    'backgroundSize': 'cover',
    'backgroundPosition': '50%'
};
const paragraph = 'Lorem ipsum dolor sit amet, ea est noster accumsan, vim elit aeque an. Eu duo quod elit, posse facer minimum pri eu, ea sit viris ceteros. Ea has consul omnesque, an vel reque graeco. Eum ne mundi nobis quando, an atqui dolor per. Ut modo elit malis sea. Nibh consetetur mei ea.';
export default () => (
    <div>
        <div style={style} className="hero">
            <div className="text"> 
                <h1>Save 10%</h1>
                <h3>Ipsum delicata sed ex.</h3>
                <h6>{paragraph}</h6>
            </div>
            <div class="productImage">
                <img src={process.env.PUBLIC_URL + '/images/PEAK_PNG.png'}/>
            </div>
        </div>
        <div className="blocks">
            <ColorBlock color="#35D3B4"/>
            <ColorBlock color="#1B2191"/>
            <ColorBlock color="#D822EE"/>
        </div>
    </div>
)