import React from "react";
import "./footer.css";
import logo1 from "../../images/bx_map.svg";
import logo2 from "../../images/tabler_phone-calling.svg";
import logo3 from "../../images/ic_outline-email.svg";
import logo4 from "../../images/Group (2).svg";
import logo6 from "../../images/Vector (6).svg";
import logo7 from "../../images/Vector (7).svg";
import logo8 from "../../images/Vector (9).svg";



function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer-part-one">
                <div className="footer-item">
                    <h3 className="footer-item-title">
                        Контактная Информация:

                    </h3>
                    <div className="footer-item-info">
                        <img src={logo1} alt="logo" className="logo" />
                        <span className="footer-item-text">
                            Адрес:
                        </span>
                        <span className="footer-item-text-part2">
                            ул. 8 Марта, 70А, Екатеринбург
                        </span>
                    </div>
                    <div className="footer-item-info middle">
                        <img src={logo2} alt="logo" className="logo" />
                        <span className="footer-item-text">
                            Телефон:
                        </span>
                        <span className="footer-item-text-part2">
                            +7 (912) 040-38-38
                        </span>
                    </div>
                    <div className="footer-item-info">
                        <img src={logo3} alt="logo" className="logo" />
                        <span className="footer-item-text">
                            Электронная почта:
                        </span>
                        <span className="footer-item-text-part2">
                            mangal-house@mail.ru
                        </span>
                    </div>

                </div>

                <div className="footer-item footer-part-one-middle">
                    <h3 className="footer-item-title">
                        Быстрые Ссылки:
                    </h3>
                    <div className="footer-ul-block">
                        <ul className="footer-ul-section">
                            <li className="footer-ul-item">
                                <a href="#home" className='menu-href-footer'>
                                    Главная
                                </a>
                            </li>
                            <li className="footer-ul-item">

                                <a href="#menu" className='menu-href-footer'>
                                    Meню
                                </a>
                            </li>
                            <li className="footer-ul-item">
                                <a href="#catalog" className='menu-href-footer'>
                                    Каталог

                                </a>
                            </li>
                        </ul>
                        <ul className="footer-ul-section left-section">
                            <li className="footer-ul-item">

                                <a href="#services" className='menu-href-footer'>
                                    Услуги

                                </a>
                            </li>
                            <li className="footer-ul-item">

                                <a href="#about" className='menu-href-footer'>
                                    О нас

                                </a>
                            </li>
                            <li className="footer-ul-item">
                                <a href="#contacts" className='menu-href-footer'>
                                    Контакты


                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="footer-item">
                    <h3 className="footer-item-title">
                        Правовая Информация:

                    </h3>
                    <div className="footer-item-info-part">

                        <p className="footer-item-text_info">
                            Политика конфиденциальности
                        </p>
                        <p className="footer-item-text_info last-info-item">
                            Условия использования
                        </p>
                    </div>


                </div>

            </div>

            <div className="footer-part-two">
                <div className="footer-item">
                    <h3 className="footer-item-title">
                        Часы Работы:

                    </h3>
                    <div className="footer-item-info-part ">
                        <p className="footer-item-text-hour">
                            <img src={logo4} alt="" className="footer-hour" />

                            <span className="footer-text-bold">
                                Понедельник Пятница:
                            </span>–  10:00 - 22:00
                        </p>

                        <p className="footer-item-text-hour last-item-hour">
                            <img src={logo4} alt="" className="footer-hour" />

                            <span className="footer-text-bold">
                                Суббота – Воскресенье:</span> 12:00 - 22:00
                        </p>
                    </div>


                </div>

                <div className="footer-item footer-part-last">
                    <h3 className="footer-item-title">
                        Следите за Нами:

                    </h3>
                    <div className="footer-item-info media">

                        <span className="footer-media">
                            <img src={logo6} alt="logo" className="logo-media-fb" />
                            Facebook
                        </span>
                        <span className="footer-media media-midle">
                            <img src={logo7} alt="logo" className="logo-media" />
                            Instagram
                        </span>
                        <span className="footer-media">
                            <img src={logo8} alt="logo" className="logo-media" />
                            Twitter
                        </span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Footer;