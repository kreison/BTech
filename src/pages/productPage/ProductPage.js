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
                                        <div>
                                            <div className={classes.block_image}>{elem.image2}</div>
                                            <p>{elem.name}</p>
                                            <h3>{elem.price}</h3>
                                        </div>
                                        <div>
                                            <div className={classes.block_image}>{elem.image2}</div>
                                            <p>{elem.name}</p>
                                            <h3>{elem.price}</h3>
                                        </div>
                                        <div>
                                            <div className={classes.block_image}>{elem.image2}</div>
                                            <p>{elem.name}</p>
                                            <h3>{elem.price}</h3>
                                        </div>
                                        <div>
                                            <div className={classes.block_image}>{elem.image2}</div>
                                            <p>{elem.name}</p>
                                            <h3>{elem.price}</h3>
                                        </div>
                                        <div>
                                            <div className={classes.block_image}>{elem.image2}</div>
                                            <p>{elem.name}</p>
                                            <h3>{elem.price}</h3>
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
