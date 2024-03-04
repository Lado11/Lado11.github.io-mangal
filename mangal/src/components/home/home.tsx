import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../images/home/img1.svg";
import img2 from "../../images/home/img2.svg";
import img3 from "../../images/home/img3.svg";


function Home() {
    return (
        <div className="home-section" id="home">

            <Carousel showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={true}>
                <div className="home-container">
                    <div className="home-image-block">
                        <img src={img1} className="home-image-item" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="home-title">
                            Добро Пожаловать в
                            "Mangal House" -
                            Мир Непревзойденной
                            Гриль-Кухни!
                        </h1>
                        <p className="home-description">
                            "Встречайте 'Mangal House' - идеальное
                            место для ценителей настоящего вкуса жареного.
                            Наш ресторан сочетает в себе традиции и
                            инновации, предлагая гостям изысканные блюда, приготовленные на открытом огне.
                            Здесь каждый найдет что-то на свой вкус - от
                            ароматных шашлыков до вегетарианских
                            деликатесов.
                        </p>
                        <p className="home-description-two">
                            Приглашаем вас погрузиться в атмосферу
                            гостеприимства и уюта. Наша команда
                            профессионалов обеспечит вам незабываемый
                            кулинарный опыт. Познакомьтесь с нашим
                            разнообразным меню,
                            узнайте больше о нас и наших услугах, и
                            планируйте свой следующий визит в 'Mangal
                            House' уже сегодня!
                        </p>
                        <button className="home-button">
                            Изучить меню
                        </button>
                    </div>
                </div>
                <div className="home-container">
                    <div className="home-image-block">
                        <img src={img2} className="home-image-item" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="home-title">
                            Ощутите вкус истинного мастерства на открытом огне.
                        </h1>
                        <p className="home-description">
                            В 'Mangal House' каждый кусочек мяса обретает неповторимый аромат благодаря
                            тщательно подобранным специям и искусном приготовлении на живом огне.
                        </p>
                        <p className="home-description-two">
                            Отмеченное теплотой дерева и домашним уютом, наше пространство приглашает
                            вас и ваших близких насладиться разнообразием гриль-меню, которое включает
                            в себя классические шашлыки,
                            экзотические маринады и вегетарианские блюда, приготовленные с особой заботой.
                        </p>
                        <p className="home-description-three">
                            "Закажите звонок прямо сейчас и позвольте нам
                            угостить вас лучшими гриль-блюдами в городе!"
                        </p>
                        <button className="home-button">
                            Изучить меню
                        </button>
                    </div>
                </div>

                <div className="home-container">
                    <div className="home-image-block">
                        <img src={img3} className="home-image-item" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="home-title">
                            Вкусные Моменты Ждут Вас в 'Mangal House'!
                        </h1>
                        <p className="home-description">
                            Откройте для себя мир неподражаемых ароматов и блюд, приготовленных на открытом огне.
                        </p>
                        <p className="home-description-two">
                            В 'Mangal House' мы объединяем вековые традиции и современные кулинарные тенденции,
                            чтобы предложить вам не просто еду, а настоящее кулинарное приключение.
                        </p>
                        <p className="home-description">
                            Наши мастера гриля используют только самые свежие и качественные
                            продукты для создания блюд, которые удивят и порадуют каждого гостя.
                        </p>
                        <button className="home-button">
                            Изучить меню
                        </button>
                    </div>
                </div>


            </Carousel>


        </div>
    )
}

export default Home;