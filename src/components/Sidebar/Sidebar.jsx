import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faMessage, faQuestion, faHistory, faGear } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='top'>
                <div className='menu'>
                    <FontAwesomeIcon className='icon' icon={faBars}/>
                </div>
                <div className='new-chat'>
                    <FontAwesomeIcon className='icon' icon={faPlus}/>
                    <p>New chat</p>
                </div>
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className='recent-entry'>
                        <FontAwesomeIcon className='icon' icon={faMessage}/>
                        <p>What is react...</p>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faQuestion}/>
                    <p>Help</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faHistory}/>
                    <p>Activity</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faGear}/>
                    <p>Settings</p>
                </div>                                
            </div>
        </div>
    );
}

export default Sidebar;