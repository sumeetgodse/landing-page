import React from 'react'
import "../styles/block1.css"
import block1img from "./images/block1-image.png"
import icon from './images/right-arrow.png';

export default function Block1() {
  return (
    <div className="container">
      <div className="block-1">
        <div className="block-1-careers">
          <div className="block1-careers-hiring">
            <div className="block1-careers-hiring-text">WE'RE HIRING</div>
          </div>
          <div className="block1-careers-visit-text">Visit our careers page</div>
          <img src={icon} className="block1-careers-icon" />
        </div>
        <div className="block1-ship-desc-1">
          <p>A better way to <br /><span className="ship">ship web apps</span></p>
        </div>
        <div className="block1-ship-desc-2">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irire qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </div>
        <div className="email-search">
          <input type="text" placeholder="Enter your email" className="e__mail" />
          {/*<div class="email-text">Enter your email</div>*/}
        </div>
        <div className="free-trial">
          <div className="free-trial-text">Start free trial</div>
        </div>
        <div className="free-trial-start-text">
          <p>Start your free 14-day trial, no credit card necessary. By providing our email, you agree to our <span className="terms">terms or service.</span></p>
        </div>
        <img src={block1img} className="block1-img" />
      </div>
    </div>
  )
}
