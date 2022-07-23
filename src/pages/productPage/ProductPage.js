import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewsComponent from '../../components/reviewsComponent/ReviewsComponent'
import classes from './Product.module.css'
import ProductSlider from './slider/ProductSlider'
import 'swiper/css';
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

function ProductPage() {

    // const [data, setData] = useState({ sprites: { other: { dream_world: { front_default: '' } } } })
    // useEffect(() => {
    //     return async () => {
    //         const response = await fetch(info);
    //         const json = await response.json();
    //         setData(json)
    //     }
    // }, []);
    const products = useSelector(state => state.products.products)
    const param = useParams()

    const URLForSlider = "https://pokeapi.co/api/v2/pokemon/?limit=50";
    const [dataForSlider, setDataForSlider] = useState([]);
    const [img, setImg] = useState({ sprites: { other: { dream_world: { front_default: '' } } } })

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${param.id}`)
            .then(res => res.json())
            .then(data => setImg(data))
    }, [])
    useEffect(() => {
        fetch(URLForSlider)
            .then(res => res.json())
            .then(data => setDataForSlider(data.results))
    }, [URLForSlider])

    return (
        <div className={ classes.product }>
            { param.id }
            {
                products.map((elem, i) => {
                    return (
                        <div className='container' key={ i }>
                            <div>
                                <h2 className={ classes.name }> { elem.name }</h2>
                                <div className={ classes.reviews }> { elem.stars } <b> 151 отзывов </b> </div>
                                <div className={ classes.block_img_price }>
                                    <div className={ classes.image }>
                                        {
                                            img.sprites.other.dream_world.front_default === ''
                                                ?
                                                <CircularProgress />
                                                :
                                                <img src={ img.sprites.other.dream_world.front_default } />

                                        }
                                    </div>
                                    <div>
                                        <h1 className={ classes.h1 }> { elem.price } </h1>
                                        <h5> { elem.specifications } </h5>
                                        <div className={ classes.block_table }>
                                            <div className={ classes.block }>
                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.procces.proName } </div>
                                                    <div className={ classes.itemDesc }> { elem.procces.proDesc } </div>
                                                </div>
                                                <div className={ classes.line }></div>
                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.mCamera.mainCam } </div>
                                                    <div className={ classes.itemDesc }> { elem.mCamera.descCam } </div>
                                                </div>
                                                <div className={ classes.line }></div>
                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.fCamera.frontCam } </div>
                                                    <div className={ classes.itemDesc }> { elem.fCamera.descCam } </div>
                                                </div>
                                                <div className={ classes.line }></div>
                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.hdd.inMemory } </div>
                                                    <div className={ classes.itemDesc }> { elem.hdd.descMemory } </div>
                                                </div>
                                                <div className={ classes.line }></div>
                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.ram.ramName } </div>
                                                    <div className={ classes.itemDesc }> { elem.ram.descRam } </div>
                                                </div>
                                                <div className={ classes.line }></div>

                                                <div className={ classes.between }>
                                                    <div className={ classes.item }> { elem.nfc.nfcName } </div>
                                                    <div className={ classes.itemDesc }> { elem.nfc.descNfc } </div>
                                                </div>
                                                <div className={ classes.line }></div>
                                            </div>
                                        </div>
                                        <button className={ classes.button }>Добавить в корзину</button>
                                    </div>
                                </div>
                                <div className={ classes.desc }>
                                    <h2> { elem.title } </h2>
                                    <p className={ classes.desc_product }> { elem.desc } </p>
                                </div>

                                <div>
                                    <ReviewsComponent />
                                </div>



                            </div>

                        </div>
                    )
                })
            }
            <ProductSlider data={ dataForSlider } />

        </div>
    )
}

export default ProductPage
