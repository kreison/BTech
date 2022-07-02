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
                                    <table className={classes.block_table}>
                                        <tbody>
                                            <tr>
                                                <th> {elem.procces.proName} </th>
                                                <td> {elem.procces.proDesc} </td>
                                            </tr>
                                            <tr>
                                                <th> {elem.mCamera.mainCam} </th>
                                                <td> {elem.mCamera.descCam} </td>
                                            </tr>
                                            <tr>
                                                <th> {elem.fCamera.frontCam} </th>
                                                <td>  {elem.fCamera.descCam} </td>
                                            </tr>
                                            <tr>
                                                <th> {elem.hdd.inMemory} </th>
                                                <td> {elem.hdd.descMemory} </td>
                                            </tr>
                                            <tr>
                                                <th> {elem.ram.ramName} </th>
                                                <td> {elem.ram.descRam} </td>
                                            </tr>
                                            <tr>
                                                <th> {elem.nfc.nfcName} </th>
                                                <td> {elem.nfc.descNfc} </td>
                                            </tr>
                                        </tbody>
                                    </table>

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
