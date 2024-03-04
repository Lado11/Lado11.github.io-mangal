import React from "react";
import services_logo from "../../images/Group 61.svg";
import "./services.css";

function Services() {
    return (
        <div id="services">
            <div className="optional-header">
                <div className="about-title-section">
                    <h2 className="about-title">
                        Услуги
                    </h2>
                </div>
                <div className="about-text-section">
                    <p className="about-text-block">
                        <span className="about-bold-text">
                            Наши Услуги Больше, Чем Просто Еда
                        </span>
                        "В 'Mangal House' мы предлагаем
                        не только восхитительные блюда, но и полный спектр услуг:
                    </p>
                </div>
                <hr className="optional-line" />
            </div>

            <div className="services-image-block">
                <div className="about-image-text-section">
                    <p className="about-image-text">
                        Приглашаем вас окунуться в
                        мир гастрономических удовольствий 'Mangal House'!
                    </p>
                    <button className="about-image-button">
                        Заказать звонок
                    </button>
                </div>

                <div>
                    <img src={services_logo} alt="logo" className="services-image-alt" />
                </div>
            </div>

        </div>
    )
}

export default Services;
