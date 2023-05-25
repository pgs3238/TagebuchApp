import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import './Navbar.css';


function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>

                <div className="navbar">
                    <IconContext.Provider value={{color: '#fff'}}>

                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>

                        <a className="brandName">
                            Mein <GiIcons.GiBookmarklet size='28px'/> Tagebuch
                        </a>
                    </IconContext.Provider>

                </div>


                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <IconContext.Provider value={{color: '#7C0A02'}}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className='menu-bars'>
                                    <FaIcons.FaWindowClose size="28px"/>
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </IconContext.Provider>
                </nav>


        </>
    );
}


export default Navbar;