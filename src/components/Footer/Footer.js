import React from 'react';
import classes from "./footer.module.css";
import inst from './images/Instagram.svg';
import fb from './images/Facebook.svg';
import tw from './images/Twitter.svg';
import yt from './images/YouTube.svg';
import FooterMap from '../FooterMap/FooterMap';


const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.body}>
                    <div className={classes.footer__inner}>
                        <h1>BTech</h1>
                        <div className={classes.line}></div>
                        <div className={classes.info}>
                            <div className={classes.customers}>
                                <h2>Покупателям</h2>
                                <ul>
                                    <li><a href="">Каталог</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Акции</a></li>
                                    <li><a href="">Доставка</a></li>
                                    <li><a href="">Обмен и возврат</a></li>
                                    <li><a href="">Доставка</a></li>
                                    <li><a href="">Рассрочка</a></li>
                                </ul>
                            </div>
                            <div className={classes.partners}>
                                <h2>Бизнес-партнерам</h2>
                                <ul>
                                    <li><a href="">Условия сотрудничества</a></li>
                                    <li><a href="">Техника для бизнеса</a></li>
                                    <li><a href="">Поставщики</a></li>
                                    <li><a href="">Аренда</a></li>
                                </ul>
                            </div>
                            <div className={classes.about}>
                                <h2>О нас</h2>
                                <ul>
                                    <li><a href="">О BTech</a></li>
                                    <li><a href="">Вакансии</a></li>
                                    <li><a href="">Отзывы</a></li>
                                    <li><a href="">Партнерам</a></li>
                                    <li><a href="">Инвесторам</a></li>
                                    <li><a href="">Политика магазина</a></li>
                                </ul>
                            </div>
                            <div className={classes.contacts}>
                                <h2>Обратная связь</h2>
                                <ul>
                                    <li><a href="">Контакты</a></li>
                                    <li><a href="">WhatsApp</a></li>
                                    <li><a href="">Telegram</a></li>
                                    <li><a href="">Оставить отзыв о качестве товара</a></li>
                                    <li><a href="">Канал в Telegram</a></li>
                                </ul>
                            </div>
                            <FooterMap/>


                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.social}>
                            <h2>Мы в соцсетях</h2>
                            <div className={classes.icons}>
                                <a href=""><img src={inst} alt=""/></a>
                                <a href=""><img src={tw} alt=""/></a>
                                <a href=""><img src={fb} alt=""/></a>
                                <a href=""><img src={yt} alt=""/></a>
                            </div>
                        </div>
                        <div className={classes.line}></div>
                        <div className={classes.bottom}>
                            <p className={classes.footer_p}>Copyright Btech 2018-2021</p>
                            <a href="">Политика конфидециальности</a>
                            <p className={classes.footer_p}>Публичная оферта</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};



export default Footer;