import React, { useEffect } from "react"
import classes from './backet.module.css'
import { useDispatch, useSelector } from "react-redux/es/exports"
import { deleteProductAction, getProductAction, increaseCountAction, getTotalSummAction } from "../../../redux/actions/actions"
import { data } from "../../../data"
import Product from "../../product/Product"
import TotalPrice from "../../basket/totalPrice/TotalPrice"


function Backet() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductAction(data))
    }, [])

    const cart = useSelector(state => state.basket.product)

    const mass = []
    cart.map((summ) => { mass.push(summ.totalPrice) })

    const deleteProduct = (id) => {
        const setCart = () => cart.filter((product) => id !== product.id)
        dispatch(deleteProductAction(setCart()))
    }

    const increase = (id) => {
        const setCart = () => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        totalPrice: (product.count + 1) * product.price
                    }
                }
                return product
            })
        }
        dispatch(increaseCountAction(setCart()))
        getTotalSumm()
    }

    const decrease = (id) => {
        const setCart = () => {
            return cart.map((product) => {
                if (product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1

                    return {
                        ...product,
                        count: newCount,
                        totalPrice: newCount * product.price
                    }
                }
                return product
            })
        }
        dispatch(increaseCountAction(setCart()))
    }

    const getTotalSumm = () => {
        let x = 0
        return mass.map(i => x += i).reverse()[0]
    }

    useEffect(() => {
        if (getTotalSumm() === undefined) {
            dispatch(getTotalSummAction(0))
        } else {
            dispatch(getTotalSummAction(getTotalSumm()))
        }
    }, [cart])

    const changeValue = (id, value) => {
        const setCart = () => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value,
                        totalPrice: value * product.price
                    }
                }
                return product
            })
        }
    }

    const products = cart.map((product) => {
        return <Product product={ product } key={ product.id } deleteProduct={ deleteProduct } increase={ increase } decrease={ decrease } changeValue={ changeValue } />
    })

    return (
        <div style={{maxWidth: 600}}>
            <div className={ classes.backet }>
                <link href="https://fonts.googleapis.com/css?family=Rubik:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
                <h3 className={ classes.backet__title }>Детали заказа</h3>
                <div className={ classes.backet_pd }>
                    { products }
                </div>
            </div>
            <TotalPrice />
        </div>
    )
}

export default Backet