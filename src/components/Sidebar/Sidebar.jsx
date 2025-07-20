import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faMessage, faQuestion, faHistory, faGear } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    function showSidebar(){
        extended?setExtended(false):setExtended(true);
    }

    return(
        <div className='sidebar'>
            <div className='top'>
                <div className='menu' onClick={showSidebar}>
                    <FontAwesomeIcon className='icon' icon={faBars}/>
                </div>
                <div className='new-chat'>
                    <FontAwesomeIcon className='icon' icon={faPlus}/>
                    {extended?<p>New chat</p>:null}
                </div>
                {extended?
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className='recent-entry'>
                        <FontAwesomeIcon className='icon' icon={faMessage}/>
                        <p>What is react...</p>
                    </div>
                </div>
                :null}      
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faQuestion}/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faHistory}/>
                    {extended?<p>Activity</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <FontAwesomeIcon className='icon' icon={faGear}/>
                    {extended?<p>Settings</p>:null}
                </div>                                
            </div>
        </div>
    );
}

export default Sidebar;