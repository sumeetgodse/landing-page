import React from 'react'
import "../styles/block3.css"
import workflow from './images/workflow.png';

export default function Block3() {
    return (
        <div className="block3">
            <div className="block3-container">
                <img src={workflow} className="block3-image" />
                <div className="block3-content1">Ready to dive in?<br />Start your free trial today.</div>
                <div className="block3-content2">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</div>
                <div className="block3-button">Sign up for free</div>
            </div>
        </div>
    )
}
