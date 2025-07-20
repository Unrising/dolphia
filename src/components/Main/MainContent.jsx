import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faCode, faMessage, faSchool, faMicrophone, faPaperPlane, faImages} from '@fortawesome/free-solid-svg-icons';
import './MainContent.css';
const MainContent = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Dolph.ia</p>
                <img src="./User.png" alt="user logo"/>
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello, Michael.</span></p>
                    <p>How can I assist you today ?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest a week-end trip in the south of france</p>
                        <FontAwesomeIcon className='icon' icon={faCompass}/>
                    </div>
                    <div className='card'>
                        <p>Summarize this document for school</p>
                        <FontAwesomeIcon className='icon' icon={faSchool}/>
                    </div>
                    <div className='card'>
                        <p>Create a e-mail for an hr related topic</p>
                        <FontAwesomeIcon className='icon' icon={faMessage}/>
                    </div>
                    <div className='card'>
                        <p>Debug this code</p>
                        <FontAwesomeIcon className='icon' icon={faCode}/>
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter a prompt here'/>
                        <div>
                            <FontAwesomeIcon className='icon' icon={faImages}/>
                            <FontAwesomeIcon className='icon' icon={faMicrophone}/>
                            <FontAwesomeIcon className='icon' icon={faPaperPlane}/>
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Dolph.ia may display inaccurate info, including about people, so double-check its responses. Your privacy and Dolph.ia Apps
                    </p>
                </div>
            </div>
        </div>
    );
}


export default MainContent;
