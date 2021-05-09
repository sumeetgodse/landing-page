import React from 'react'
import "../styles/block4.css"
import inbox from './images/inbox.png';
import block4icon from './images/block4-icon.png';
import profileicon from './images/profile-icon.png';

export default function Block4() {
    return (
        <div className="block4">
            <img src={inbox} className="block4-image" />
            <img src={block4icon} className="block4-icon" />
            <div className="block4-content1">
                Stay on top of customer support
            </div>
            <div className="block4-content2">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra duis tellus ornare pharetra.
            </div>
            <div className="block4-button">
                Get started
            </div>
            <div className="breakline"></div>
            <div className="block4-content3">
                "Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."
            </div>
            <img src={profileicon} className="profile-icon" />
            <div className="profile-name">Marcia Hill, Digital Marketing Manager</div>
        </div>
    )
}
