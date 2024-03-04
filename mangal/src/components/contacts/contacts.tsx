import React from "react";
import "./contacts.css";
import { Select } from "antd";
import logo1 from "../../images/material-symbols_feedback-outline.svg";
import logo2 from "../../images/Group.svg";
import logo3 from "../../images/Vector (2).svg";
import logo4 from "../../images/Vector (1).svg";


function Contacts() {
    return (
        <div id="contacts">
            <div className="optional-header">
                <div className="about-title-section">
                    <h2 className="about-title">
                        Контакты
                    </h2>
                </div>
                <div className="about-text-section">
                    <p className="about-text-block">
                        <span className="about-bold-text">
                            Шашлычный 'Mangal House'
                        </span>
                        —
                        Ваше место для незабываемых гастрономических впечатлений.
                    </p>
                </div>
                <hr className="optional-line" />
            </div>
            <div className="contacts-main-block">
                <div className="contacts-block-back">
                    <div className="contacts-section-block">
                        <div className="contacts-section">
                            <div className="contacts-form-section">
                                <h3 className="form-title">
                                    Форма Обратной Связи
                                </h3>
                                <hr className="form-line" />
                                <p className="form-text">
                                    Мы всегда рады услышать ваши отзывы и предложения!
                                </p>
                                <p className="form-text-section">
                                    Пожалуйста, заполните ниже форму, чтобы связаться с нами. Мы постараемся ответить вам как можно скорее.
                                </p>
                                <form action="">

                                    <div>
                                        <input placeholder="Имя" className="form-input" />
                                        <input placeholder="Электронная почта" className="form-input left" />
                                    </div>
                                    <div className="form-input-section">
                                        <input placeholder="Телефон" className="form-input" />



                                        <Select
                                            defaultValue="Тема Сообщения"
                                            className="left select-option"
                                            //   onChange={handleChange}
                                            options={[
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                                { value: 'disabled', label: 'Disabled' },
                                            ]}
                                        />


                                    </div>
                                    <textarea placeholder="Ваше Сообщение" className="form-area" />
                                    <div className="chek-section">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="form-link">
                                            Я согласен с политикой
                                            конфиденциальности и условиями
                                            обработки моих персональных данных.
                                        </span>
                                    </div>
                                    <button className="form-button">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="information-block">
                        <div className="information-main-block">

                            <div className="info-block">
                                <div className="information-section">
                                    <img src={logo4} alt="logo" className="information-logo" />
                                    <h3 className="information-title">
                                        Наш Адрес:
                                    </h3>
                                </div>
                                <a className="inmormation-section-text" href="ул. 8 Марта, 70А, Екатеринбург">
                                    ул. 8 Марта, 70А, Екатеринбург
                                </a>
                            </div>

                            <div className="info-block">
                                <div className="information-section">
                                    <img src={logo3} alt="logo" className="information-logo" />
                                    <h3 className="information-title">
                                        Заказы и Бронирование:
                                    </h3>
                                </div>
                                <div className="ul-li-sec">
                                    <div>
                                        <ul>
                                            <li>
                                                Телефон:
                                            </li>
                                            <li>
                                                Email:
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ul-li-info">
                                        <ul>
                                            <li>
                                                +7 (912) 040-38-38
                                            </li>
                                            <li>
                                                mangal-house@mail.ru
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="info-block">
                                <div className="information-section">
                                    <img src={logo2} alt="logo" className="information-logo" />
                                    <h3 className="information-title">
                                        Часы Работы:
                                    </h3>
                                </div>
                                <div className="ul-li-sec">
                                    <div>
                                        <ul>
                                            <li>
                                                Будние дни:
                                            </li>
                                            <li>
                                                Выходные:
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ul-li-info-2">
                                        <ul>
                                            <li>
                                                10:00 - 22:00
                                            </li>
                                            <li>
                                                12:00 - 22:00
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="info-block">
                                <div className="information-section">
                                    <img src={logo1} alt="logo" className="information-logo" />
                                    <h3 className="information-title">
                                        Запросы и Обратная Связь:
                                    </h3>
                                </div>
                                <p className="inmormation-section-text">
                                    Если у вас есть вопросы, пожелания или специальные запросы,
                                    пожалуйста, используйте нашу форму обратной связи на сайте
                                    или напишите нам напрямую по электронной почте.
                                    Мы всегда рады обратной связи и готовы помочь вам в организации
                                    вашего идеального визита.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contacts;
