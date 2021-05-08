import React from 'react'
import "../styles/block2.css"
import pixels from './pixels.png';
import globe from './globe.png';
import flash from './flash.png';
import weigh from './weigh.png';
import mail from './mail.png';

export default function Block2() {
    return (
        <div class="wrapper" >
            <div class="column1" >
                <img src={pixels} className="pixel-image" />
                <div class="content">A better way to send <br />money</div>
            </div>
            <div class="column2" > 
            <img src={globe} className="block2-img" />
            <div class="col2_header1">Competitive rates</div>
            <div class="col2_data1">Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.
            </div>
            <img src={flash} className="block2-img" />
            <div class="col2_header1">Instant transfers</div>
            <div class="col2_data1">Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.
            </div>
            </div>
            <div class="column3" >
            <img src={weigh} className="block2-img" />
            <div class="col3_header1">
                No Hidden fees
            </div>
            <div class="col3_data1">
                Corporis quisqam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distincto ratione.
            </div>
            <img src={mail} className="block2-img" />
            <div class="col3_header1">
                Reminder emails
            </div>
            <div class="col3_data1">
                Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.
            </div>
            </div>
        </div>
    )
}