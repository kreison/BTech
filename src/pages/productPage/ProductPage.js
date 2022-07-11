import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import classes from "./../productPage/Product.module.css";
import ProductSlider from "./slider/ProductSlider";
import ReviewsComponent from "../../components/reviewsComponent/ReviewsComponent";
import { useParams } from 'react-router-dom';

function ProductPage() {
    const products = useSelector(state => state.products.products);
    const param = useParams()

    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=50";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [URL])

    return (
        <div className='container'>
            {param.id}
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
                                        <h3 className={classes.spec}> {elem.specifications} </h3>
                                        <div className={classes.block_table}>
                                            <div className={classes.block}>
                                                <div className={classes.between}>
                                                    <h4> {elem.procces.proName} </h4>
                                                    <p className={classes.day}> {elem.procces.proDesc} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <h4> {elem.mCamera.mainCam} </h4>
                                                    <p className={classes.day}> {elem.mCamera.descCam} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <h4> {elem.fCamera.frontCam} </h4>
                                                    <p className={classes.day}> {elem.fCamera.descCam} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <h4> {elem.hdd.inMemory} </h4>
                                                    <p className={classes.day}> {elem.hdd.descMemory} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <h4> {elem.ram.ramName} </h4>
                                                    <p className={classes.day}> {elem.ram.descRam} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                                <div className={classes.between}>
                                                    <h4> {elem.nfc.nfcName} </h4>
                                                    <p className={classes.day}> {elem.nfc.descNfc} </p>
                                                </div>
                                                <div className={classes.line}></div>
                                            </div>
                                        </div>
                                        <button>Добавить в корзину</button>
                                    </div>
                                </div>

                                <div className={classes.desc}>
                                    <h2 className={classes.h2}> {elem.title} </h2>
                                    <p className={classes.desc_product}> {elem.desc} </p>
                                    <a href="">{elem.descLink}</a>
                                </div>

                                <div>
                                    <ReviewsComponent/>
                                </div>

                                <div className={classes.products}>
                                    <div className={classes.h2_top}>
                                        <h2>Похожие товары</h2>
                                    </div>
                                    <ProductSlider data={data}/>
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
