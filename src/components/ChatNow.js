import React, { useState } from "react";
import Whatsapp from '../Assets/whatsapp.svg';
import PointerLeft from '../Assets/PointerLeft.svg';

function ChatNow() {
    const phoneNumber = "+923312109987";

    const generateWhatsAppChatLink = () => {
      return `https://wa.me/${phoneNumber}`;
    };

    const [isOpen, setIsOpen] = useState(true);
    
    const toggleIcon = () => {
        setIsOpen(!isOpen);
    }

    const showIcon = () => {
        toggleIcon()
        if(isOpen === true){
            document.getElementsByClassName('Chat-Now-Container')[0].style.marginRight = '0';
        }
        if(isOpen !== true){
            document.getElementsByClassName('Chat-Now-Container')[0].style.marginRight = '-80px';
        }
    }
    
    return (
        <div className="Chat-Now-Container">
                <img className={`${isOpen ? 'slideAnimationOff' : 'slideAnimationOn'}`} onMouseDown={()=> showIcon()} src={PointerLeft} alt="PointerLeft" />
                <a href={generateWhatsAppChatLink()} target="_blank" rel="noopener noreferrer"><img id="Chat-Now" src={Whatsapp} alt="Whatsapp" /></a>
        </div>
    );
}

export default ChatNow;
