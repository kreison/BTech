import React from "react";
import classes from './product1.module.css'

function Product({ product, deleteProduct, increase, decrease, changeValue }) {
    const { title, totalPrice, id, count } = product;

    const priceFormatter = new Intl.NumberFormat()

    return (
        <div className={ classes.backet_fspdd1 }>
            <div className={ classes.fspdd1_pds }>
                <h4 className={ classes.fsp }>{ title }</h4>
                <div className={ classes.fspdd1_d }>
                    <p href="" className={ classes.fsp_mopt }>Приобрести позже</p>
                    <p href="" onClick={ () => { deleteProduct(id) } } className={ classes.fsp_mopt }>Удалить</p>
                </div>
            </div>
            <div className={classes.prss}>
                <h4 className={classes.prs}>{priceFormatter.format(totalPrice)} сомов</h4>
                <div className={classes.prs_cals}>
                    <button onClick={() => {decrease(id)}} className={`button ${classes.prs_minus} ${ classes.prs_plmn} `}>-</button>
                    <input onChange={(e) => {changeValue(id, +e.target.value)}} className={classes.prs_noun} type='number' min='1' max='100' value={count}></input>
                    <button onClick={() => {increase(id)}} className={`button ${classes.prs_plus} ${ classes.prs_plmn} ${classes.buttonsAdd} buttons_add`}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product;