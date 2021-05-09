import React from 'react'
import "../styles/block2.css"
import pixels from './images/pixels.png';
import globe from './images/globe.png';
import flash from './images/flash.png';
import weigh from './images/weigh.png';
import mail from './images/mail.png';

export default function Block2() {
    return (
        <div className="wrapper" >
            <div className="column1" >
                <img src={pixels} className="pixel-image" />
                <div className="content">A better way to send <br />money</div>
            </div>
            <div className="column2" >
                <img src={globe} className="block2-img" />
                <div className="col2_header1">Competitive rates</div>
                <div className="col2_data1">Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.
            </div>
                <img src={flash} className="block2-img" />
                <div className="col2_header1">Instant transfers</div>
                <div className="col2_data1">Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.
            </div>
            </div>
            <div className="column3" >
                <img src={weigh} className="block2-img" />
                <div className="col3_header1">
                    No Hidden fees
            </div>
                <div className="col3_data1">
                    Corporis quisqam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distincto ratione.
            </div>
                <img src={mail} className="block2-img" />
                <div className="col3_header1">
                    Reminder emails
            </div>
                <div className="col3_data1">
                    Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.
            </div>
            </div>
        </div>
    )
}