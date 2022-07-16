import React from "react";
import classes from './totalPrice.module.css'
import { useSelector } from "react-redux/es/exports";

function TotalPrice () {

    const totalSumm = useSelector(state => state.basket.totalSumm)
    const priceFormatter = new Intl.NumberFormat()

    return (
        <>
            <div className={classes.result_price_div}>
                <h4 className={classes.result_price_h}>Итого: <span className={classes.result_price}>{priceFormatter.format(totalSumm)} сомов</span></h4>
            </div>
        </>
    )
}

export default TotalPrice;