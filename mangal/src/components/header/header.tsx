import React, { useState } from 'react';
import Header_logo from "../../images/Group 95.svg";
import Header_phone from "../../images/Vector.svg";
import Header_badge from "../../images/Group (3).svg"
import "./header.css";
import { Badge, Button, Space } from 'antd'
import MobileHeader from './mobile-header';
import { useNavigate } from "react-router-dom";


function Header() {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className='project-mobile'>
                <MobileHeader />

            </div>
            <div className="project-header-section">
                <header className="header">
                    <div className='header-inner'>

                        <div className='header-logo-section'>
                            <img src={Header_logo} className="header-logo" alt="header-logo" />

                        </div>

                        <nav className='header-nav'>
                            <ul className='menu-list'>
                                <li className='menu-item'>
                                    <a href="#home" className='menu-href'>
                                        Главная
                                    </a>
                                </li>
                                <li className='menu-item'>

                                    <a href="#menu" className='menu-href'>
                                        Меню
                                    </a>
                                </li>
                                <li className='menu-item'>

                                    <a href="#catalog" className='menu-href'>
                                        Каталог
                                    </a>
                                </li>
                                <li className='menu-item'>
                                    <a href="#services" className='menu-href'>
                                        Услуги

                                    </a>
                                </li>
                                <li className='menu-item about-text' >
                                    <a href="#about" className='menu-href'>
                                        О нас

                                    </a>
                                </li>
                                <li className='menu-item'>
                                    <a href="#contacts" className='menu-href'>
                                        Контакты

                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a href="tel:+7 (982) 670-74-94" className='header-phone first'>
                            <div className='phone-logo-section'>
                                <img src={Header_phone} className="header-logo" alt="header-logo" />
                            </div>
                            <span className='phone-text'>
                                +7 (912) 040-38-38
                            </span>
                        </a>
                        <a href="tel:+7 (912) 040-38-38" className='header-phone '>
                            <div className='phone-logo-section'>
                                <img src={Header_phone} className="header-logo" alt="header-logo" />
                            </div>
                            <span className='phone-text'>
                                +7 (912) 040-38-38
                            </span>
                        </a>

                        <div>
                            <Space size="middle">
                                <Badge count={5} className="badgeCount" size="small">
                                    <div className='header-badge-section'>
                                        <img src={Header_badge} alt="header-badge" />

                                    </div>    </Badge>

                            </Space>

                        </div>
                    </div>

                </header>
            </div>
        </>
    );
}

export default Header;
