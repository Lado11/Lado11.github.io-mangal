import React from "react";
import "./menu.css";
import { data } from "../../constant/constant";
import icon1 from "../../images/Group 8.svg";
import icon2 from "../../images/Group 17.svg";
import icon_hover1 from "../../images/Group (4).svg";
import icon_hover2 from "../../images/Group 8 (1).svg";
import icon_hover3 from "../../images/Group 17 (1).svg";
import hover_image from "../../images/IMG_3221 (1).svg";


function Menu() {

    return (
        <div >

            <div className="optional-header" id="menu">
                <div className="about-title-section">
                    <h2 className="about-title">
                        Меню
                    </h2>
                </div>
                <div className="about-text-section">
                    <p className="about-text-block">
                        <span className="about-bold-text">
                            “Mangal House”
                        </span>
                        специализируется на армянской кухне и предлагает аутентичные блюда,
                        приготовленные с использованием традиционных специй и методов приготовления.
                    </p>
                </div>
                <hr className="optional-line" />
            </div>
            <div className="menu-section">


                {data.map((item: any) => {

                    return (
                        <div className="menu-item-block">

                            <div className="menu-title-section">
                                <p className="menu-title">
                                    {item.title}

                                </p>
                            </div>
                            <div className="menu-item-img-block">
                                {item.menuItem.map((menuItem: any) => {

                                    return (
                                        <div className="menu-block">
                                            <div className="menu-item-img-hover">
                                                <img src={hover_image} alt="logo" className="hover-image-block" />
                                                <img src={icon_hover1} alt="lupa" className="hover-image" />
                                                <div className="menu-item-desc-hover">
                                                    <p className="menu-text-hover">
                                                        {menuItem.text}
                                                    </p>
                                                    <p className="menu-desc-hover">
                                                        {menuItem.desc}
                                                    </p>
                                                </div>

                                                <hr className="menu-option-line" />
                                                <div className="menu-item-option-hover">
                                                    <div className="menu-item-option-part">
                                                        <p className="menu-price-hover">{menuItem.price}</p>
                                                        <p className="menu-mass-hover"> {menuItem.mass}</p>
                                                    </div>
                                                    <div className="menu-item-option-part">
                                                        <img src={icon_hover3} alt="icon" className="menu-item-opt-img" />

                                                        <img src={icon_hover2} alt="icon" className="menu-item-opt-img2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu-item-img">
                                                <img src={menuItem.img.menu_item} alt="logo" />
                                                <div className="menu-item-desc">
                                                    <p className="menu-text">
                                                        {menuItem.text}
                                                    </p>
                                                    <p className="menu-desc">
                                                        {menuItem.desc}
                                                    </p>
                                                </div>

                                                <hr className="menu-option-line" />
                                                <div className="menu-item-option">
                                                    <div className="menu-item-option-part">
                                                        <p className="menu-price">{menuItem.price}</p>
                                                        <p className="menu-mass"> {menuItem.mass}</p>
                                                    </div>
                                                    <div className="menu-item-option-part">
                                                        <img src={icon2} alt="icon" className="menu-item-opt-img" />

                                                        <img src={icon1} alt="icon" className="menu-item-opt-img2" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Menu;