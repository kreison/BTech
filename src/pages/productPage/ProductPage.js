import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewsComponent from '../../components/reviewsComponent/ReviewsComponent'
import classes from './Product.module.css'
import ProductSlider from './slider/ProductSlider'
import 'swiper/css';
import { useParams } from 'react-router-dom'

function ProductPage() {
    const products = useSelector(state => state.products.products)
    const param = useParams()

    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=50";
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('http://159.89.2.247:8003/api/caps/')
            .then(res => res.json())
            .then(data => console.log(data))
        console.log('data')
    }, [])
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [URL])
    return (
        <div className={classes.product}>
            {param.id}
            {
                products.map((elem, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <h2> {elem.name}</h2>
                                <div className={classes.reviews}> {elem.stars} <b> 151 отзывов </b> </div>
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

                                

                            </div>

                        </div>
                    )
                })
            }
                            <ProductSlider data={data}/>
           
        </div>
    )
}

export default ProductPage
