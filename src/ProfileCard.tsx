import mypic from './assets/mypic.jpg';
import './ProfileCard.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaVoicemail} from "react-icons/fa";



function ProfileCard(prop) {
    return (
        <div className='dent'>

            <img src={mypic} alt="My Profile Pic" />

            <div>
                <h2>{prop.Name}</h2>
                <h5 style={{ color: 'gold', marginTop: '-10px' }}>{prop.Occupation}</h5>
                <p style={{ color: 'white', marginTop: '-10px' }}>{prop.Access}</p>
            </div>

            <div className='butn'>
                <button style={{ fontSize: '17px' }}> <FaVoicemail/> Email Me </button>
                <button style={{ fontSize: '17px' }}> <FaLinkedin/> LinkedIn </button>
                <button style={{ fontSize: '17px' }}> <FaWhatsapp/>WhatsApp </button>
                
            </div>

            <div className='hero'>
                <h3>{prop.About}</h3>
                <p>Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit
                    . Obcaecati, mollitia. Odit, veritatis?
                </p>

                <h3>{prop.interest}</h3>
                <p>Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit
                    . Obcaecati, mollitia. Odit, veritatis?
                </p>
                
            </div>

            <div className ='socials'>

                <FaFacebook style = {{fontSize: '40px'}} />
                <FaLinkedin style = {{fontSize: '40px'}}  />
                <FaWhatsapp  style = {{fontSize: '40px'}} />
                <FaInstagram  style = {{fontSize: '40px'}} />

            </div>


        </div>
    )
}

export default ProfileCard;