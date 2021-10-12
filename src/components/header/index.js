import React , { useState } from 'react'
import './header.css'
import Web from './web/index'
import Mobile from './mobile/index';
function Header() {
    let [isOpen, setisOpen] = useState(false);
    return (
        <div className="header">
            <div className='logo'>
                Aashutosh Pudasaini
            </div>
            <div className='menu'>
                <div className='web-menu'>
                     <Web />
                     </div>
                <div className='mobile-menu'>
                    <div onClick={()=>{isOpen = setisOpen(!isOpen)}}>
                    <i class="fi fi-rr-list menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen}/>}
                    </div>
            </div>
        </div>
    )
}

export default Header;
