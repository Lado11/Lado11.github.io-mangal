import React from "react";
import img2 from "../../images/catalog/DALL·E 2023-12-15 12.11.46 - A visually appealing image of a variety of garnishes suitable for a barbecue restaurant like 'Mangal House' 1.svg";
import img3 from "../../images/catalog/DALL·E 2023-12-15 13.12 1.svg";
import img4 from "../../images/catalog/DALL·E 2023-12-15 13.18.49 - A delicious and visually appealing image of Shawarma, a popular Middle Eastern dish 1.svg";
import img5 from "../../images/catalog/DALL·E 2023-12-15 13.22.55 - A visually captivating image of marinated meat, suitable for a barbecue restaurant like 'Mangal House' 1.svg";
import img6 from "../../images/catalog/DALL·E 2023-12-15 13.30.06 - A colorful and appetizing image of a variety of sauces, perfect for a barbecue restaurant like 'Mangal House' 1.svg";
import "./catalog.css";

function Catalog() {
    const data = [
        {
            id: 1,
            img: img6,
            title: "Шашлыки"
        },
        {
            id: 2,
            img: img2,
            title: "Гарниры"
        },
        {
            id: 3,
            img: img3,
            title: "Кебабы"
        },
        {
            id: 4,
            img: img4,
            title: "Шаурма"
        },
        {
            id: 5,
            img: img5,
            title: "Маринованное мясо"
        },
        {
            id: 6,
            img: img6,
            title: "Соусы"
        },
    ]
    return (
        <div className="catalog" id="catalog">
            <div className="optional-header-catalog">
                <div className="about-title-section">
                    <h2 className="about-title">
                        Каталог
                    </h2>
                </div>
                <div className="about-text-section">
                    <p className="about-text-block">
                        <span className="about-bold-text">
                            Приветствуем вас в кулинарном райском уголке "Mangal House"!
                        </span>
                        Здесь, где каждое блюдо рассказывает историю,
                        мы приглашаем вас на увлекательное гастрономическое путешествие.
                        Наши шеф-повара с любовью создают шедевры кухни, сочетая богатые
                        традиции приготовления шашлыка с инновационными подходами.
                    </p>
                </div>
                <hr className="optional-line" />
            </div>
            <ul className="catalog-ul-section">
                {data.map((item: any) => {

                    return (
                        <li className="catalog-image-li" >
                            <div className="hover-elemnt">
                                <p className="hover-element-title">
                                    {item.title}
                                </p>
                                <hr className="hover-element-line" />
                            </div>
                            <img src={item.img} className="catalog-image" alt="logo" />
                            <div className="catalog-image-title-sec">
                                <p className="catalog-image-title">
                                    {item.title}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}

export default Catalog;