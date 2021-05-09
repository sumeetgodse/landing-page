import React from 'react'
import "../styles/block5.css"
import block5icon from './images/block5-icon.png';
import dribble from './images/dribble.png';
import instagram from './images/instagram.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import github from './images/github.png';


export default function Block5() {
    return (
        <div className="block5">
            <img src={block5icon} className="block5-icon" />
            <div className="block5-content">
                Making the world a better place through constructing elegant hierarchies.
            </div>
            <div className="social-media">
                <img src={facebook} className="social-media-icon" />
                <img src={instagram} className="social-media-icon" />
                <img src={twitter} className="social-media-icon" />
                <img src={github} className="social-media-icon" />
                <img src={dribble} className="social-media-icon" />
            </div>
            <ul className="list1">
                <li className="li-header">SOLUTIONS</li>
                <li className="resp">Marketing</li>
                <li>Analytics</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
            <ul className="list2">
                <li className="li-header">SUPPORT</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
            </ul>
            <ul className="list3">
                <li className="li-header">COMPANY</li>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Partners</li>
            </ul>
            <ul className="list4">
                <li className="li-header">LEGAL</li>
                <li>Claim</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
    )
}
