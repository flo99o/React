import React from 'react';
import './Contacts.css';



function Contacts(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />

            <div className="name">
                {props.name}
                <div className="status">
                    <div className="status-text">
                        <p className={props.online ? "status-online" : "status-offline"}></p>
                        <p className="status-text">{props.online ? "online" : "offline"}</p>

                    </div>
                </div>
            </div>
        </div>
    )}

    export default Contacts;