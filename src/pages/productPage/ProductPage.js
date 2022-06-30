import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Product.module.css'

function ProductPage() {
    const products = useSelector(state => state.products.products)


    return (
        <div className={classes.product}>
            {
                products.map((elem, i) => {
                    return (
                        <div key={i}>
                            <h2>{elem.name}</h2>
                            <div className={classes.reviews}> {elem.stars} <b> 15 отзывов </b> </div>
                            <div className={classes.block_img_price}>
                                <div className={classes.image}> {elem.image} </div>
                                <div>
                                    <h1> {elem.price} </h1>
                                    <h5> {elem.specifications} </h5>
                                    <p> {elem.procces.proName} ____________ {elem.procces.proDesc} </p>
                                    <p> {elem.mCamera.mainCam} ____________ {elem.mCamera.descCam} </p>
                                    <p> {elem.fCamera.frontCam} ____________ {elem.fCamera.descCam} </p>
                                    <p> {elem.hdd.inMemory} ____________ {elem.hdd.descMemory} </p>
                                    <p> {elem.ram.ramName} ____________ {elem.ram.descRam} </p>
                                    <p> {elem.nfc.nfcName} ____________ {elem.nfc.descNfc} </p>

                                <button>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={classes.desc}>
                                <h3> {elem.title} </h3>
                                <p> {elem.desc} </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductPage
