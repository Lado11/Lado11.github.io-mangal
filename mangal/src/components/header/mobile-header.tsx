import React, { useState } from 'react';
import { Badge, Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import "./header.css"
import mobile_header from "../../images/i.webp";
import Header_logo from "../../images/Group 95.svg";
import Header_phone from "../../images/Vector.svg";
import Header_badge from "../../images/Group (3).svg"
import { UnorderedListOutlined } from '@ant-design/icons';

function MobileHeader() {


    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='header-logo-section-mobile'>
                <img src={Header_logo} className="header-logo" alt="header-logo" />

            </div>
            <Space>
                <UnorderedListOutlined onClick={showDrawer} />

            </Space>

            <Drawer
                placement={placement}
                width={300}
                onClose={onClose}
                open={open}
                className='drawer'

            >
                <div >
                    <nav className='header-nav-mobile'>
                        <ul className='menu-list-mobile'>
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
                    <a href="tel:+7 (982) 670-74-94" className='header-phone-mobile '>
                        <div className='phone-logo-section'>
                            <img src={Header_phone} className="header-logo" alt="header-logo" />
                        </div>
                        <span className='phone-text'>
                            +7 (912) 040-38-38
                        </span>
                    </a>
                    <a href="tel:+7 (912) 040-38-38" className='header-phone-mobile'>
                        <div className='phone-logo-section'>
                            <img src={Header_phone} className="header-logo" alt="header-logo" />
                        </div>
                        <span className='phone-text'>
                            +7 (912) 040-38-38
                        </span>
                    </a>

                    <div>
                        <Space size="middle" className='badge-header'>
                            <Badge count={5} className="badgeCount" size="small">
                                <div className='header-badge-section'>
                                    <img src={Header_badge} alt="header-badge" />

                                </div>    </Badge>

                        </Space>

                    </div>
                </div>

            </Drawer>
        </>
    );
};


export default MobileHeader;