import React from 'react'
import { useSelector } from 'react-redux'
import ReviewsComponent from '../../components/reviewsComponent/ReviewsComponent'
import classes from './Product.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ProductPage() {
    const products = useSelector(state => state.products.products)

    return (
        <div className={classes.product}>
            {
                products.map((elem, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <h2> {elem.name}</h2>
                                <div className={classes.reviews}> {elem.stars} <b> 15 отзывов </b> </div>
                                <div className={classes.block_img_price}>
                                    <div className={classes.image}> {elem.image} </div>
                                    <div>
                                        <h1> {elem.price} </h1>
                                        <h5> {elem.specifications} </h5>
                                        <div className={classes.block_table}>
                                            <div className={classes.block}>
                                                <div className={classes.between}>
                                                    <th> {elem.procces.proName} </th>
                                                    <td> {elem.procces.proDesc} </td>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <th> {elem.mCamera.mainCam} </th>
                                                    <td> {elem.mCamera.descCam} </td>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <th> {elem.fCamera.frontCam} </th>
                                                    <td> {elem.fCamera.descCam} </td>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <th> {elem.hdd.inMemory} </th>
                                                    <td> {elem.hdd.descMemory} </td>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <th> {elem.ram.ramName} </th>
                                                    <td> {elem.ram.descRam} </td>
                                                </div>
                                                <div className={classes.line}></div>

                                                <div className={classes.between}>
                                                    <th> {elem.nfc.nfcName} </th>
                                                    <td> {elem.nfc.descNfc} </td>
                                                </div>
                                                <div className={classes.line}></div>
                                            </div>
                                        </div>
                                        <button>Добавить в корзину</button>
                                    </div>
                                </div>
                                <div className={classes.desc}>
                                    <h2> {elem.title} </h2>
                                    <p className={classes.desc_product}> {elem.desc} </p>
                                </div>

                                <div>
                                    <ReviewsComponent/>
                                </div>

                                <div className={classes.products}>
                                    <div>
                                        <h2>Похожие товары</h2>
                                    </div>
                                    <div className={classes.cards}>
                                        <div className={classes.card}>
                                            <div>
                                                <div className={classes.block_image}>{elem.image2}</div>
                                                <p>{elem.name}</p>
                                                <h3>{elem.price}</h3>
                                            </div>
                                            <div className={classes.svg}>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.7798C0 2.0793 2.36914 0 5.15 0C6.58347 0 7.84484 0.672139 8.75 1.54183C9.65516 0.672139 10.9165 0 12.35 0C15.1309 0 17.5 2.0793 17.5 4.7798C17.5 6.62967 16.7111 8.25644 15.6182 9.63154C14.5271 11.0043 13.1 12.1693 11.7335 13.116C11.2115 13.4776 10.6835 13.8111 10.2003 14.0572C9.74651 14.2883 9.22474 14.5 8.75 14.5C8.27526 14.5 7.75349 14.2883 7.29973 14.0572C6.81648 13.8111 6.28846 13.4776 5.76653 13.116C4.40005 12.1693 2.97287 11.0043 1.88182 9.63154C0.788881 8.25644 0 6.62967 0 4.7798ZM5.15 1.5C3.07075 1.5 1.5 3.0291 1.5 4.7798C1.5 6.18329 2.09579 7.49 3.05609 8.69822C4.01828 9.90881 5.31292 10.9769 6.62074 11.883C7.11562 12.2258 7.58174 12.5175 7.98045 12.7206C8.40865 12.9386 8.65666 13 8.75 13C8.84334 13 9.09135 12.9386 9.51955 12.7206C9.91826 12.5175 10.3844 12.2258 10.8793 11.883C12.1871 10.9769 13.4817 9.90881 14.4439 8.69822C15.4042 7.49 16 6.18329 16 4.7798C16 3.0291 14.4292 1.5 12.35 1.5C11.1558 1.5 10.0408 2.21342 9.34457 3.11892C9.2026 3.30356 8.98291 3.41176 8.75 3.41176C8.51709 3.41176 8.2974 3.30356 8.15544 3.11892C7.4592 2.21342 6.34415 1.5 5.15 1.5Z" fill="#A4A2AF"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={classes.card}>
                                            <div>
                                                <div className={classes.block_image}>{elem.image2}</div>
                                                <p>{elem.name}</p>
                                                <h3>{elem.price}</h3>
                                            </div>
                                            <div className={classes.svg}>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.7798C0 2.0793 2.36914 0 5.15 0C6.58347 0 7.84484 0.672139 8.75 1.54183C9.65516 0.672139 10.9165 0 12.35 0C15.1309 0 17.5 2.0793 17.5 4.7798C17.5 6.62967 16.7111 8.25644 15.6182 9.63154C14.5271 11.0043 13.1 12.1693 11.7335 13.116C11.2115 13.4776 10.6835 13.8111 10.2003 14.0572C9.74651 14.2883 9.22474 14.5 8.75 14.5C8.27526 14.5 7.75349 14.2883 7.29973 14.0572C6.81648 13.8111 6.28846 13.4776 5.76653 13.116C4.40005 12.1693 2.97287 11.0043 1.88182 9.63154C0.788881 8.25644 0 6.62967 0 4.7798ZM5.15 1.5C3.07075 1.5 1.5 3.0291 1.5 4.7798C1.5 6.18329 2.09579 7.49 3.05609 8.69822C4.01828 9.90881 5.31292 10.9769 6.62074 11.883C7.11562 12.2258 7.58174 12.5175 7.98045 12.7206C8.40865 12.9386 8.65666 13 8.75 13C8.84334 13 9.09135 12.9386 9.51955 12.7206C9.91826 12.5175 10.3844 12.2258 10.8793 11.883C12.1871 10.9769 13.4817 9.90881 14.4439 8.69822C15.4042 7.49 16 6.18329 16 4.7798C16 3.0291 14.4292 1.5 12.35 1.5C11.1558 1.5 10.0408 2.21342 9.34457 3.11892C9.2026 3.30356 8.98291 3.41176 8.75 3.41176C8.51709 3.41176 8.2974 3.30356 8.15544 3.11892C7.4592 2.21342 6.34415 1.5 5.15 1.5Z" fill="#A4A2AF"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={classes.card}>
                                            <div>
                                                <div className={classes.block_image}>{elem.image2}</div>
                                                <p>{elem.name}</p>
                                                <h3>{elem.price}</h3>
                                            </div>
                                            <div className={classes.svg}>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.7798C0 2.0793 2.36914 0 5.15 0C6.58347 0 7.84484 0.672139 8.75 1.54183C9.65516 0.672139 10.9165 0 12.35 0C15.1309 0 17.5 2.0793 17.5 4.7798C17.5 6.62967 16.7111 8.25644 15.6182 9.63154C14.5271 11.0043 13.1 12.1693 11.7335 13.116C11.2115 13.4776 10.6835 13.8111 10.2003 14.0572C9.74651 14.2883 9.22474 14.5 8.75 14.5C8.27526 14.5 7.75349 14.2883 7.29973 14.0572C6.81648 13.8111 6.28846 13.4776 5.76653 13.116C4.40005 12.1693 2.97287 11.0043 1.88182 9.63154C0.788881 8.25644 0 6.62967 0 4.7798ZM5.15 1.5C3.07075 1.5 1.5 3.0291 1.5 4.7798C1.5 6.18329 2.09579 7.49 3.05609 8.69822C4.01828 9.90881 5.31292 10.9769 6.62074 11.883C7.11562 12.2258 7.58174 12.5175 7.98045 12.7206C8.40865 12.9386 8.65666 13 8.75 13C8.84334 13 9.09135 12.9386 9.51955 12.7206C9.91826 12.5175 10.3844 12.2258 10.8793 11.883C12.1871 10.9769 13.4817 9.90881 14.4439 8.69822C15.4042 7.49 16 6.18329 16 4.7798C16 3.0291 14.4292 1.5 12.35 1.5C11.1558 1.5 10.0408 2.21342 9.34457 3.11892C9.2026 3.30356 8.98291 3.41176 8.75 3.41176C8.51709 3.41176 8.2974 3.30356 8.15544 3.11892C7.4592 2.21342 6.34415 1.5 5.15 1.5Z" fill="#A4A2AF"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={classes.card}>
                                            <div>
                                                <div className={classes.block_image}>{elem.image2}</div>
                                                <p>{elem.name}</p>
                                                <h3>{elem.price}</h3>
                                            </div>
                                            <div className={classes.svg}>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.7798C0 2.0793 2.36914 0 5.15 0C6.58347 0 7.84484 0.672139 8.75 1.54183C9.65516 0.672139 10.9165 0 12.35 0C15.1309 0 17.5 2.0793 17.5 4.7798C17.5 6.62967 16.7111 8.25644 15.6182 9.63154C14.5271 11.0043 13.1 12.1693 11.7335 13.116C11.2115 13.4776 10.6835 13.8111 10.2003 14.0572C9.74651 14.2883 9.22474 14.5 8.75 14.5C8.27526 14.5 7.75349 14.2883 7.29973 14.0572C6.81648 13.8111 6.28846 13.4776 5.76653 13.116C4.40005 12.1693 2.97287 11.0043 1.88182 9.63154C0.788881 8.25644 0 6.62967 0 4.7798ZM5.15 1.5C3.07075 1.5 1.5 3.0291 1.5 4.7798C1.5 6.18329 2.09579 7.49 3.05609 8.69822C4.01828 9.90881 5.31292 10.9769 6.62074 11.883C7.11562 12.2258 7.58174 12.5175 7.98045 12.7206C8.40865 12.9386 8.65666 13 8.75 13C8.84334 13 9.09135 12.9386 9.51955 12.7206C9.91826 12.5175 10.3844 12.2258 10.8793 11.883C12.1871 10.9769 13.4817 9.90881 14.4439 8.69822C15.4042 7.49 16 6.18329 16 4.7798C16 3.0291 14.4292 1.5 12.35 1.5C11.1558 1.5 10.0408 2.21342 9.34457 3.11892C9.2026 3.30356 8.98291 3.41176 8.75 3.41176C8.51709 3.41176 8.2974 3.30356 8.15544 3.11892C7.4592 2.21342 6.34415 1.5 5.15 1.5Z" fill="#A4A2AF"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={classes.card}>
                                            <div>
                                                <div className={classes.block_image}>{elem.image2}</div>
                                                <p>{elem.name}</p>
                                                <h3>{elem.price}</h3>
                                            </div>
                                            <div className={classes.svg}>
                                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.7798C0 2.0793 2.36914 0 5.15 0C6.58347 0 7.84484 0.672139 8.75 1.54183C9.65516 0.672139 10.9165 0 12.35 0C15.1309 0 17.5 2.0793 17.5 4.7798C17.5 6.62967 16.7111 8.25644 15.6182 9.63154C14.5271 11.0043 13.1 12.1693 11.7335 13.116C11.2115 13.4776 10.6835 13.8111 10.2003 14.0572C9.74651 14.2883 9.22474 14.5 8.75 14.5C8.27526 14.5 7.75349 14.2883 7.29973 14.0572C6.81648 13.8111 6.28846 13.4776 5.76653 13.116C4.40005 12.1693 2.97287 11.0043 1.88182 9.63154C0.788881 8.25644 0 6.62967 0 4.7798ZM5.15 1.5C3.07075 1.5 1.5 3.0291 1.5 4.7798C1.5 6.18329 2.09579 7.49 3.05609 8.69822C4.01828 9.90881 5.31292 10.9769 6.62074 11.883C7.11562 12.2258 7.58174 12.5175 7.98045 12.7206C8.40865 12.9386 8.65666 13 8.75 13C8.84334 13 9.09135 12.9386 9.51955 12.7206C9.91826 12.5175 10.3844 12.2258 10.8793 11.883C12.1871 10.9769 13.4817 9.90881 14.4439 8.69822C15.4042 7.49 16 6.18329 16 4.7798C16 3.0291 14.4292 1.5 12.35 1.5C11.1558 1.5 10.0408 2.21342 9.34457 3.11892C9.2026 3.30356 8.98291 3.41176 8.75 3.41176C8.51709 3.41176 8.2974 3.30356 8.15544 3.11892C7.4592 2.21342 6.34415 1.5 5.15 1.5Z" fill="#A4A2AF"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductPage
