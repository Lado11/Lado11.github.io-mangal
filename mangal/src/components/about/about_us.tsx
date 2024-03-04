import React from "react";
import "./about.css";
import about_us from "../../images/Group 61 (1).svg";

function About_Us() {
    return (
        <div id="about">
            <div className="optional-header">
                <div className="about-title-section">
                    <h2 className="about-title">
                        О нас
                    </h2>
                </div>
                <div className="about-text-section">
                    <p className="about-text-block">
                        <span className="about-bold-text">
                            Добро пожаловать в 'Mangal House' —
                        </span>
                        Мы гордимся тем, что предлагаем нашим гостям
                        не просто еду, а истинное путешествие в мир
                        вкусов и ароматов. Наш ресторан 'Mangal House'
                        был основан 2021 г, и с тех пор мы стали
                        излюбленным местом для тех, кто ценит атмосферу
                        настоящего тепла,
                        домашний вкус и качество обслуживания.
                    </p>
                </div>
                <hr className="optional-line" />
            </div>

            <div className="about-image-block">
                <div className="about-image-text-section">
                    <p className="about-image-text">
                        Гастрономический уголок традиционного уюта и инновационной кулинарии.
                    </p>
                    <button className="about-image-button">
                        Заказать звонок
                    </button>
                </div>

                <div>
                    <img src={about_us} alt="logo" className="about-image-alt" />
                </div>
            </div>

        </div>
    )
}

export default About_Us;
